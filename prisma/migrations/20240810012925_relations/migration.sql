/*
  Warnings:

  - You are about to drop the `Owner` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_owner_id_fkey";

-- DropTable
DROP TABLE "Owner";

-- DropTable
DROP TABLE "Pet";

-- CreateTable
CREATE TABLE "Pets" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "age" INTEGER NOT NULL,
    "species" VARCHAR(100) NOT NULL,
    "adoptedStatus" BOOLEAN NOT NULL DEFAULT false,
    "adopted_petsId" INTEGER,

    CONSTRAINT "Pets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adopted_pets" (
    "id" SERIAL NOT NULL,
    "adopted_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Adopted_pets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Owners" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "cpf" TEXT NOT NULL,
    "cellphone" TEXT NOT NULL,
    "adopted_petsId" INTEGER,

    CONSTRAINT "Owners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kennels" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "petId" TEXT,
    "adopted_petsId" INTEGER,

    CONSTRAINT "Kennels_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Owners_cpf_key" ON "Owners"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Kennels_address_key" ON "Kennels"("address");

-- AddForeignKey
ALTER TABLE "Pets" ADD CONSTRAINT "Pets_adopted_petsId_fkey" FOREIGN KEY ("adopted_petsId") REFERENCES "Adopted_pets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Owners" ADD CONSTRAINT "Owners_adopted_petsId_fkey" FOREIGN KEY ("adopted_petsId") REFERENCES "Adopted_pets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kennels" ADD CONSTRAINT "Kennels_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kennels" ADD CONSTRAINT "Kennels_adopted_petsId_fkey" FOREIGN KEY ("adopted_petsId") REFERENCES "Adopted_pets"("id") ON DELETE SET NULL ON UPDATE CASCADE;
