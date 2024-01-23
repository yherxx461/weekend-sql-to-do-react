CREATE TABLE "toDoList" (
	"id" serial primary key,
	"task" varchar(120) not null,
	"status" boolean default false
);

INSERT INTO "toDoList" ("task")
VALUES 
	('Make breakfast'),
	('Group acitivity'),
	('Drop of packages at post office'),
	('Grocery Shopping'),
	('Do laundary'
);

SELECT * FROM "toDoList";

DROP TABLE "toDoList";