from sqlalchemy.orm import Session
from sqlalchemy import insert
from .password_utils import PasswordUtils
from .models import SessionToken
import models.models
import logging as log

log.basicConfig(level=log.INFO)


def get_or_create_session_token(db: Session, user_id: int) -> str:
    """
    Find existing session token or return a new one and save it
    :param db:
    :param user_id:
    :return: token
    """
    token = db.query(models.models.SessionToken).filter(models.User.id == user_id).first()
    log.info(f"token: {token}")
    if not token:
        log.info(f"No token found for user {user_id}; creating a new one!")
        pw_utils = PasswordUtils()
        token = pw_utils.generate_token()
        session_token = SessionToken(
            token=token,
            user_id=user_id
        )
        db.add(session_token)
        db.commit()
        db.refresh(session_token)
        log.info(f"Persisted token {token} to DB for user {user_id}")

    return token
