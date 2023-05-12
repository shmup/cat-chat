from sqlalchemy.orm import Session
from . import models, schemas
from .password_utils import PasswordUtils
from uuid import uuid4


def get_user_by_user_id(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_creds(db: Session, username: str, password: str):
    return db.query(models.User).filter(models.User.username == username and models.User.password == password).first()


def get_user_by_guid(db: Session, guid: str):
    return db.query(models.User).filter(models.User.guid == guid).first()


def get_user_by_name(db: Session, name: str):
    return db.query(models.User).filter(models.User.username == name).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate) -> models.User:
    pw = PasswordUtils.generate_password()
    hashed_pw = PasswordUtils.get_hashed_password(pw)
    guid = str(uuid4())
    db_user = models.User(
        username=user.username,
        password=hashed_pw,
        guid=guid,
        avatar_filename=user.avatar_filename
    )
    create_user_item(db, db_user)
    # After creating user, customize response
    db_user.password = ""
    db_user.guid = ""
    return db_user


def create_user_item(db: Session, item: schemas.UserCreate):
    db.add(item)
    db.commit()
    db.refresh(item)
    return item
