import sqlalchemy
from sqlalchemy import engine as db


def main():

    get_connection()


def get_connection():

    try:
        engine = db.create_engine("sqlite:///cat-chat.sqlite")
        conn = engine.connect()

        return conn
    except sqlalchemy.ExceptionContext:
        print(f"Something went wrong")


if __name__ == 'main':

    main()
