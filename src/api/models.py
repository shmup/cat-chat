from sqlalchemy import Integer, String, Column, DateTime, Boolean
from datetime import datetime
from .schemas import UserBase


class User(UserBase):
    """
    User model
    """
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String(20), nullable=False)
    password = Column(String(50), nullable=False)
    guid = Column(String(50), nullable=False)
    avatar_filename = Column(String(255))
    created_on = Column(DateTime(), default=datetime.now)
    updated_on = Column(DateTime(), default=datetime.now, onupdate=datetime.now)
    active = Column(Boolean(), default=True)
