from fastapi import APIRouter
from models.schemas import UserAuth


user_auth_router = APIRouter()


@user_auth_router.post("/auth/")
async def user_auth(auth_data: UserAuth):
    """
    1. Get post data: username, password
    2. Check password against DB
    3. Ensure user is active
    4. If all good, set cookie with token
    :param auth_data
    :return:
    """
    pass
