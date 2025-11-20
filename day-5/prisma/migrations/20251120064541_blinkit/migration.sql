-- CreateTable
CREATE TABLE "blinkit" (
    "product_id" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_weight" TEXT NOT NULL,
    "product_offer" TEXT NOT NULL,
    "product_price" TEXT NOT NULL,
    "product_delivery_time" TEXT NOT NULL,

    CONSTRAINT "blinkit_pkey" PRIMARY KEY ("product_id")
);
