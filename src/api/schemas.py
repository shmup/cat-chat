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


class ItemBase(BaseModel):
    title: str
    description: str or None


class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True


class User(UserBase):
    id: int
    items: list[Item] = []

    class Config:
        orm_mode = True
