-- AlterTable
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_pkey",
ALTER COLUMN "id" SET DATA TYPE CHAR(36),
ADD CONSTRAINT "Pet_pkey" PRIMARY KEY ("id");
