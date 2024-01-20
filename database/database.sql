CREATE TABLE "table" (
	"id" serial primary key,
	"task" varchar(120) not null,
	"status" varchar(80)
);

INSERT INTO "table" ("id", "task", "status")
VALUES 
	('Make coffee', 'completed'),
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

