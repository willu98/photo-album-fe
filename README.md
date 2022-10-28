# Photo Album repository

A single page web app that allows users to upload and view pictures in their albums. Built using Postgres, AWS S3 and FastAPI on the backend & React with Material UI for the front end

### Backend repository can be found [HERE](https://github.com/willu98/Photo-Album-be)

## Features
* Login and registration page with JWT auth

![Login](https://github.com/willu98/photo-album-fe/blob/master/images/login.png)
![Register](https://github.com/willu98/photo-album-fe/blob/master/images/register.png?raw=true)

* Photos page, retreives users photos and allows for update, delete photo entries
![photos_page](https://github.com/willu98/photo-album-fe/blob/master/images/photos_page.png)
![photo_options](https://github.com/willu98/photo-album-fe/blob/master/images/photo_options.png)
![upload](https://github.com/willu98/photo-album-fe/blob/master/images/upload.png)

## Soon to come features
* Albums page shows user created albums

* Account info page

* Search bar to find user photos

## Run in Docker container
~~~~
docker build -t <Docker Image name> . 

docker run --name <Container Name> -d -p <Port on local>:<Port in container> <Docker Image name>
~~~~

## Run on Local
### To install dependencies and run
~~~~
npm install

npm start
~~~~
