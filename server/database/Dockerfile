
# Use the official MySQL 8.0 image from Docker Hub
FROM mysql:8.0

# Environment variables for MySQL
ENV MYSQL_DATABASE=notes 
    MYSQL_USER=
    MYSQL_PASSWORD=mypassword 

# Copy custom SQL scripts to initialize the database
COPY ./init.sql /docker-entrypoint-initdb.d/

# Expose port 3306 to the host
EXPOSE 3306
