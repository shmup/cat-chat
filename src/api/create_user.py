from models import User
import argparse
import logging as log

log.basicConfig(level=log.INFO)
pw_utils = PasswordUtils()

def create_user(username) -> bool:
    """
    Creates a new user in the DB
    :param username:
    :return: boolean
    """
    pass


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("username", type=str)
    args = parser.parse_args()
    create_user(args.username)


if __name__ == '__main__':
    main()
