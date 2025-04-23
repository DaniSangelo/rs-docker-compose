# Customer Registration App with Docker, NestJS, and Prisma

## 🚀 Overview

This project is an example of an app that uses NestJS, Prisma, and Docker. The development environment is containerized to simplify deployment and local development. The PostgreSQL database runs in a separate container from the NestJS application, which is configured to connect to it.

## ⚡️ Stack

![NestJS](https://img.shields.io/badge/NestJS-333333?style=flat&logo=nestjs&logoColor=white)
![Postgres](https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)

## 🛠️ Requirements

Before you begin, make sure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## 🔥 Run the project with Docker

1. **Clone this repo**:
   ```bash
   git clone https://github.com/DaniSangelo/rs-docker-compose.git
   cd rs-docker-compose

2. **Build and start the containers**:
   ```bash
   docker compose up --build
