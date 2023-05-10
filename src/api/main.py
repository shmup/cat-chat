from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from models import schemas, crud
from models.database import SessionLocal, engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


"""
User routes
"""


@app.post("/api/users/", response_model=schemas.UserCreate)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    if user:
        existing_user = crud.get_user_by_name(db, name=user.name)
        if existing_user:
            raise HTTPException(status_code=400, detail="Name unavailable")
        return crud.create_user(db=db, user=user)


@app.get("/api/users/", response_model=list[schemas.UserBase])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users


@app.get("/api/users/{guid}", response_model=schemas.UserBase)
def read_user(guid: str, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_guid(db, guid=guid)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    db_user.password = ""
    return db_user
