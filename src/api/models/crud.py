from sqlalchemy.orm import Session
from . import models, schemas
from .password_utils import PasswordUtils
from uuid import uuid4


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_guid(db: Session, guid: str):
    return db.query(models.User).filter(models.User.guid == guid).first()


def get_user_by_name(db: Session, name: str):
    return db.query(models.User).filter(models.User.name == name).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate) -> models.User:
    pw = PasswordUtils.generate_password()
    hashed_pw = PasswordUtils.get_hashed_password(pw)
    guid = str(uuid4())
    db_user = models.User(
        name=user.name,
        hashed_password=hashed_pw,
        guid=guid
    )
    create_user_item(db, db_user)
    return db_user


def create_user_item(db: Session, item: schemas.UserCreate):
    #db_item = models.Item(**item.dict())
    db.add(item)
    db.commit()
    db.refresh(item)
    return item
