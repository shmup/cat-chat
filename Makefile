web:
	npm start

api:
	@cd src/api && uvicorn main:app --reload

.PHONY: web api
