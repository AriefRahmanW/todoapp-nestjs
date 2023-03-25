test_docker:
	docker run -e MYSQL_HOST=172.17.0.1 -e MYSQL_USER=root -e MYSQL_PASSWORD=12345678 -e MYSQL_DBNAME=todoapp -p 8090:3030 ariefrahmanw/todoapp-nestjs