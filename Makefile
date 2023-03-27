run:
	docker run -e MYSQL_HOST=127.0.0.1 -e MYSQL_USER=root -e MYSQL_PASSWORD=password -e MYSQL_DBNAME=todoapp -e MYSQL_PORT=3306 -p 8090:3030 ariefrahmanw/devcode-nodejs

rebuild:
	docker-compose up -d --build --force-recreate

build:
	docker build --no-cache -t todoapp-nestjs .

mysql:
	docker run --name mysql-docker -p3306:3306 -v mysql-volume:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=12345678 -d mysql:5.7