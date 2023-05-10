from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class UserBase(BaseModel):
    name: str
    password: str
    guid: str
    avatar_filename: Optional[str]
    created_at: Optional[datetime]
    updated_at: Optional[datetime]
    active: Optional[bool] = True

    class Config:
        orm_mode = True


class UserCreate(UserBase):
    password: str
