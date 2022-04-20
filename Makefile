GREEN= \033[0;32m

up:
	npm run start

install:
	npm i

lint:
	@npm run lint

lint-fix:
	@npm run lint:fix

format: 
	@npm run lint:all

syntax: install lint-fix format
	@echo "${GREEN}-----------> success"
