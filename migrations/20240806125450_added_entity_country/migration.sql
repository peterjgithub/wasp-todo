-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "officialname" TEXT NOT NULL,
    "tld" TEXT NOT NULL,
    "cca2" TEXT NOT NULL,
    "cca3" TEXT NOT NULL,
    "capital" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false
);
