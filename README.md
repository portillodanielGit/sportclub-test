## Backend with Python

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

## Installation without docker

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) .

```bash
cd frontend
npm i
npm run dev
```

## Description

Crud for sportclub member
