## Backend with Python

Backed Created with Django, Django rest framework and Coreapi for docs

## Dependencies

Django = 4.2.5
djangorestframework = 3.14.0
django-cors-headers = 3.13.0
gunicorn = 20.1.0
coreapi = 2.3.3

## Backend installation without docker

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

## API

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

## Frontend installation without docker

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) .

```bash
cd frontend
npm i
npm run dev
```

## Description

Crud for sportclub member

---

## Backend installation with docker

To run this server execute the following commands

```bash
cd backend
docker build -t <ImageName> .
docker run -d -p8080:8000 <ImageName>
```

## Description

With these commands you can run the container on port 8000

## Docker file explanation

```bash
FROM python:3.8-slim #This is the docker image for node avaliable in dockerhub

RUN pip install --upgrade pip #Installing pip(the package installer)

COPY ./requirements.txt . #Copy the requirements.txt, they are the dependencies of the backend project
RUN pip install -r requirements.txt #Installing all dependencies

COPY . /app #Copy everything
WORKDIR /app #Setting /app as work directory

ENTRYPOINT ["python", "manage.py", "runserver" , "0.0.0.0:8000" , "--noreload"] #Running the django server in the port 8000
```

---

---

## Frontend installation with docker

To run this server execute the following commands

```bash
cd frontend
docker build -t <ImageName> .
docker run -d -5173:5173 <ImageName>
```

## Description

With these commands you can run the frontend container on port 5173

## Docker file explanation

```bash
FROM node:18-alpine # This is the docker image for node avaliable in dockerhub

WORKDIR /react-vite-app # Setting /react-vite-app as work directory

EXPOSE 5173 # This is the port that we will expose

COPY package.json package-lock.json ./ # Running the COPY command to copy the package.json and package-lock.json to the workdir

RUN npm install --silent # Running this tommand to install all dependencies

COPY . ./ # Copy everything else including the vite.config.js(important)

CMD ["npm", "run", "dev"] # Running this command to execute the app
```

---
