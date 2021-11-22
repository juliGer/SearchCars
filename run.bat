docker-compose run web python backend_ceca/manage.py migrate
docker-compose run web python backend_ceca/manage.py loaddata backend_ceca/app_ceca/fixtures/car.json
docker-compose up