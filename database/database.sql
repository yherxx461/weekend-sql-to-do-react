CREATE TABLE "toDoList" (
	"id" serial primary key,
	"task" varchar(120) not null,
	"status" boolean default
);

INSERT INTO "toDoList" ("task")
VALUES 
	('Make coffee'),
	('Cook breakfast'),
	('Wash the dishes'),
	('Pack clothes to ship out'),
	('Drop of packages at post office'),
	('Grocery Shopping'),
	('Do laundary'),
	('Cook dinner'),
	('Shower'),
	('Sleep'
);

SELECT * FROM "toDoList";

DROP TABLE "toDoList";