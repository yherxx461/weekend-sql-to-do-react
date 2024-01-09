CREATE TABLE "table" (
	"id" serial primary key,
	"task" varchar(120) not null,
	"status" varchar(80)
);

INSERT INTO "table" ("id", "task", "status")
