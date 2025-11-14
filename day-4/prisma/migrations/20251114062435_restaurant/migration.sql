-- CreateTable
CREATE TABLE "restaurant" (
    "restaurant_id" TEXT NOT NULL,
    "restaurant_name" TEXT NOT NULL,
    "restaurant_rating" TEXT NOT NULL,
    "restaurant_offer" TEXT NOT NULL,
    "restaurant_location" TEXT NOT NULL,
    "restaurant_category" TEXT NOT NULL,
    "restaurant_time" TEXT NOT NULL,

    CONSTRAINT "restaurant_pkey" PRIMARY KEY ("restaurant_id")
);
