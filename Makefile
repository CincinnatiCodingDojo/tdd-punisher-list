.PHONY: default install lint

SHELL := /bin/bash

default:
	@sudo docker-compose up

install:
	@sudo docker-compose run npm install

lint:
	@sudo docker-compose run npm run lint

