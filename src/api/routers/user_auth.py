from fastapi import APIRouter, status, Response
from starlette.responses import JSONResponse
from models.schemas import UserAuth
from models.database import Database
from models.password_utils import PasswordUtils
from models.user_crud import get_user_by_name
from models.user_auth_crud import get_or_create_session_token
from datetime import datetime, timedelta
import logging as log


log.basicConfig(level=log.INFO)
user_auth_router = APIRouter()
db = Database()
session = db.get_session()


@user_auth_router.post("/auth/", status_code=status.HTTP_200_OK)
async def user_auth(auth_data: UserAuth, response: Response):
    """
    1. Get post data: username, password
    2. Check password against DB
    3. Ensure user is active
    4. If all good, set cookie with token
    :param auth_data
    :param response
    :return: token
    """
    response.status_code = status.HTTP_400_BAD_REQUEST
    auth_response = {
        "status": "ERROR",
        "message": "Invalid credentials"
    }
    user = get_user_by_name(session, auth_data.username)
    if user:
        pw_utils = PasswordUtils()
        log.info(f"auth pw: {auth_data.password} and user pw: {user.password}")
        is_valid_pw = pw_utils.check_password(auth_data.password, user.password)
        if is_valid_pw:
            log.info(f"Successfully authenticated user {auth_data.username}")
            response.status_code = status.HTTP_200_OK
            auth_response["status"] = "OK"
            auth_response["message"] = "Successfully logged in"
            token = get_or_create_session_token(session, user.id)
            expires = datetime.utcnow() + timedelta(days=30)
            json_resp = JSONResponse(content=auth_response)
            json_resp.set_cookie(
                key="cat-chat-token",
                value=token,
                httponly=True,
                expires=expires.strftime("%a, %d %b %Y %H:%M:%S GMT")
            )
            log.info("Set auth token cookie!")
            return json_resp
        else:
            log.error(f"Password mismatch for {auth_data.username}")
    else:
        log.error(f"Invalid username: {auth_data.username}")

    return auth_response
