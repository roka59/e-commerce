/*
  Warnings:

  - A unique constraint covering the columns `[mobile]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Client` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "password" SET DATA TYPE VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "Client_mobile_key" ON "Client"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
