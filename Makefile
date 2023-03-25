test_docker:
	docker run -e MYSQL_HOST=127.17.0.2 -e MYSQL_USER=root -e MYSQL_PASSWORD=12345678 -e MYSQL_DBNAME=todoapp -p 8090:3030 ariefrahmanw/todoapp-nestjs

rebuild:
	docker-compose up -d --build --force-recreate

build:
	docker build -t todoapp-nestjs .

mysql:
	docker run --name mysql-docker -e MYSQL_ROOT_PASSWORD=12345678 -d mysql:5.7 -p 3306:3306