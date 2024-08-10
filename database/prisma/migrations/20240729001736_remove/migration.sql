/*
  Warnings:

  - The primary key for the `Owner` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Pet` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_owner_id_fkey";

-- AlterTable
ALTER TABLE "Owner" DROP CONSTRAINT "Owner_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "cpf" SET DATA TYPE TEXT,
ALTER COLUMN "cellphone" SET DATA TYPE TEXT,
ADD CONSTRAINT "Owner_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "owner_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pet_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
