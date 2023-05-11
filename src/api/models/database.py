from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./cat-chat.sqlite"


class Database:

    session = None
    base = None
    engine = None

    def __init__(self):
        if not self.session:
            self.engine = create_engine(
                SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
            )
            session_local = sessionmaker(autocommit=False, autoflush=False, bind=self.engine)
            self.session = session_local()
            self.base = declarative_base()

    def get_session(self):
        return self.session

    def get_base(self):
        return self.base

    def get_engine(self):
        return self.engine
