# ComparaEnCasa-SearchCars
    Application made in React.js and Django Rest to search for a car from a license plate
   
## Requirements

1. docker
2. docker-compose

## How to run 

1. Open a terminal
2. Go to the comparaEnCasa Directory
3. Run `docker-compose up -d` If it asks sudo use sudo
4. Run `docker-compose run web python backend_ceca/manage.py migrate` to initialize MySQL database If it asks for sudo use sudo
5. Run `docker-compose run web python backend_ceca/manage.py loaddata backend_ceca/app_ceca/fixtures/car.json` to load the database with some examples If it asks for sudo use sudo
6. Go to http://localhost:4000/
7. Enjoy it :wink:!

## Tools

1. [React](https://es.reactjs.org/)
2. [MySQL](https://dev.mysql.com/doc/)
3. [Docker](https://docs.docker.com/)
4. [Material-ui](https://mui.com/getting-started/usage/)
5. [Django-rest](https://www.django-rest-framework.org/) 
6. [Docker-compose](https://docs.docker.com/compose/)
