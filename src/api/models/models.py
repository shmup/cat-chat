from sqlalchemy import Integer, String, Column, DateTime, Boolean
from datetime import datetime
from pydantic import BaseModel
from .database import Base


class User(Base):
    """
    User model
    """
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(20), nullable=False, index=True)
    password = Column(String(50), nullable=False)
    guid = Column(String(50), nullable=False)
    avatar_filename = Column(String(255))
    created_on = Column(DateTime(), default=datetime.now)
    updated_on = Column(DateTime(), default=datetime.now, onupdate=datetime.now)
    active = Column(Boolean, default=True)


class ItemBase(BaseModel):
    title: str
    description: str or None


class Item(ItemBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True
