import sqlalchemy
from sqlalchemy import engine as db

def get_connection():
    conn = None
    try:
        engine = db.create_engine("sqlite:///cat-chat.sqlite", echo=True)
        conn = engine.connect()
        return conn
    except sqlalchemy.ExceptionContext:
        print(f"Something went wrong")
    finally:
        if conn:
            conn.close()
