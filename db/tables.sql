CREATE TABLE "users" (
	"id" serial NOT NULL PRIMARY KEY,
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"password" char(60) NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "shortLinks" (
	"id" serial NOT NULL PRIMARY KEY,
	"link" TEXT NOT NULL UNIQUE,
	"shortLink" TEXT NOT NULL UNIQUE,
	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
	"userId" integer NOT NULL REFERENCES "users"("id")
);



CREATE TABLE "accessControl" (
	"id" serial NOT NULL PRIMARY KEY,
	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
	"linkId" integer NOT NULL REFERENCES "shortLinks"("id")
);



CREATE TABLE "sessions" (
	"id" serial NOT NULL PRIMARY KEY,
	"userId" integer NOT NULL REFERENCES "users"("id"),
	"token" TEXT NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
	"endedAt" TIMESTAMP
);