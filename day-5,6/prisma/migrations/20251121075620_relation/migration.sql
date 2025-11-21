/*
  Warnings:

  - You are about to drop the `blinkit` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Categories" AS ENUM ('vegetables', 'fruits', 'staples', 'snacks', 'beverages', 'household_essentials');

-- DropTable
DROP TABLE "blinkit";

-- CreateTable
CREATE TABLE "Blinkit" (
    "product_id" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_weight" TEXT NOT NULL,
    "product_offer" TEXT NOT NULL,
    "product_price" TEXT NOT NULL,
    "product_delivery_time" TEXT NOT NULL,

    CONSTRAINT "Blinkit_pkey" PRIMARY KEY ("product_id","product_name")
);

-- CreateTable
CREATE TABLE "Quantity" (
    "quantity_id" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "Quantity_pkey" PRIMARY KEY ("quantity_id")
);

-- CreateTable
CREATE TABLE "Category" (
    "category_id" TEXT NOT NULL,
    "category" "Categories" NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_product_id_product_name_key" ON "Category"("product_id", "product_name");

-- AddForeignKey
ALTER TABLE "Quantity" ADD CONSTRAINT "Quantity_product_id_product_name_fkey" FOREIGN KEY ("product_id", "product_name") REFERENCES "Blinkit"("product_id", "product_name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_product_id_product_name_fkey" FOREIGN KEY ("product_id", "product_name") REFERENCES "Blinkit"("product_id", "product_name") ON DELETE RESTRICT ON UPDATE CASCADE;
