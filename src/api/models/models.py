from sqlalchemy import Integer, String, Column, DateTime, Boolean, ForeignKey
from datetime import datetime
from pydantic import BaseModel
from .database import Database
from sqlalchemy.orm import relationship, Mapped, mapped_column

db = Database()
Base = db.get_base()


class User(Base):
    """
    User model
    """
    __tablename__ = 'users'
    id: Mapped[int] = mapped_column(Integer(), primary_key=True)
    username = Column(String(20), nullable=False, index=True)
    password = Column(String(50), nullable=False)
    guid = Column(String(50), nullable=False)
    avatar_filename = Column(String(255))
    created_on = Column(DateTime(), default=datetime.now)
    updated_on = Column(DateTime(), default=datetime.now, onupdate=datetime.now)
    active = Column(Boolean, default=True)


class SessionToken(Base):
    """
    Session token model for user login
    """
    __tablename__ = 'session_tokens'
    id = Column(Integer, primary_key=True, index=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    token = Column(String(255), nullable=False, index=True)
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
