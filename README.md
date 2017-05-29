Help users collaborate to create a story

Requirements doc link:
	https://docs.google.com/document/d/1_Qe9gLCWgj5HU392kDw_kjfmay6k7IyPlHXdTjdOv9I/edit?ts=5928fde6#heading=h.xsgmz741a8v1


Steps to create database
1) Login to postgres shell
    $ sudo -u postgres psql
2) Create database
    $ create database story_teller;
3) Create user
    $ create user hashy with password 'bambi';
4) Grant db privileges to user
    $ grant all privileges on database story_teller to hashy;


Steps to run application
1) go to story_teller folder
2) run 'virtualenv venv'
3) run 'source venv/bin/activate'
4) run 'pip install -r requirements.text' to install all requirements.
5) run $ export PYTHONPATH='.'
6) run $ alembic upgrade head
7) run $ python manage.py runserver
