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


def create_user(db: Session, item: schemas.UserCreate, user_id: int):
    pw = PasswordUtils.generate_password()
    hashed_pw = PasswordUtils.get_hashed_password(pw)
    guid = str(uuid4())
    db_user = models.User(
        name=item.name,
        hashed_password=hashed_pw,
        guid=guid
    )
    db_item = create_user_item(db_user)
    return db_item


def create_user_item(db: Session, item: schemas.ItemCreate, user_id: int):
    db_item = models.Item(**item.dict(), owner_id=user_id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
