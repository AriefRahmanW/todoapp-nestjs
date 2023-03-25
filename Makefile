test_docker:
	docker run -e MYSQL_HOST=db -e MYSQL_USER=root -e MYSQL_PASSWORD=12345678 -e MYSQL_DBNAME=todoapp -p 8090:3030 ariefrahmanw/todoapp-nestjs

rebuild:
	docker-compose up -d --build --force-recreate

build:
	docker build .