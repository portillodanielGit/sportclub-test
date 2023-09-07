## Backend with Python

Backed Created with Django, Django rest framework and Coreapi for docs

## Dependencies

Django = 4.2.5
djangorestframework = 3.14.0
django-cors-headers = 3.13.0
gunicorn = 20.1.0
coreapi = 2.3.3

## Installation without docker

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install requirements.txt.

```bash
cd backend
python -m venv venv
cd venv/Scripts/
activate
```

Go to the backend directory

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Api

You can access the api with this url http://127.0.0.1:8000/api/v1/miembros/
To acces the swagger use the following url http://127.0.0.1:8000/api/docs/

---

## Frontend with React

Frontend created with vite js

## Dependencies

    hookform/error-message = ^2.0.1.
    axios = ^1.5.0,
    react = ^18.2.0,
    react-dom = ^18.2.0,
    react-hook-form = ^7.46.1,
    react-hot-toast = ^2.4.1,
    react-router-dom = ^6.15.0

## Installation without docker

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) .

```bash
cd frontend
npm i
npm run dev
```

## Description

Crud for sportclub member
