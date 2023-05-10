from pydantic import BaseModel
from datetime import datetime


class UserBase(BaseModel):
    id: int
    name: str
    password: str
    guid: str
    avatar_filename: str
    created_on: datetime
    updated_at: datetime or None

    class Config:
        orm_mode = True


class UserCreate(UserBase):
    password: str
