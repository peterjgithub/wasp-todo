-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "billingCycle" TEXT NOT NULL DEFAULT 'monthly',
    "description" TEXT NOT NULL
);
INSERT INTO "new_Plan" ("billingCycle", "description", "id", "name", "price") SELECT "billingCycle", "description", "id", "name", "price" FROM "Plan";
DROP TABLE "Plan";
ALTER TABLE "new_Plan" RENAME TO "Plan";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
