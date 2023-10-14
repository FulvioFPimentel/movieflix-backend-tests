FROM ubuntu:latest as build

RUN apt-get update
RUN apt-get install openjdk-11-jdk -y
COPY . .

RUN apt-get install maven -y
RUN mvn clean install

FROM openjdk:11-jdk-slim

EXPOSE 8080
COPY --from=build /target/*.jar movieflix.jar

ENTRYPOINT ["java","-jar","movieflix.jar"]