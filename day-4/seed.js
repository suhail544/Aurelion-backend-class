const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.restaurant.createMany({
    data: [
      {
        restaurant_name: "Spice Garden",
        restaurant_rating: "4.5",
        restaurant_offer: "20% Off",
        restaurant_location: "Chennai",
        restaurant_category: "South Indian",
        restaurant_time: "30 mins"
      },
      {
        restaurant_name: "Burger House",
        restaurant_rating: "4.2",
        restaurant_offer: "Buy 1 Get 1",
        restaurant_location: "Bangalore",
        restaurant_category: "Fast Food",
        restaurant_time: "25 mins"
      },
      {
        restaurant_name: "North Feast",
        restaurant_rating: "4.0",
        restaurant_offer: "10% Off",
        restaurant_location: "Hyderabad",
        restaurant_category: "North Indian",
        restaurant_time: "35 mins"
      },
      {
        restaurant_name: "Tandoori Nights",
        restaurant_rating: "4.7",
        restaurant_offer: "15% Off",
        restaurant_location: "Delhi",
        restaurant_category: "BBQ & Grill",
        restaurant_time: "40 mins"
      },
      {
        restaurant_name: "Pizza Central",
        restaurant_rating: "4.1",
        restaurant_offer: "Free Coke",
        restaurant_location: "Pune",
        restaurant_category: "Italian",
        restaurant_time: "30 mins"
      },
      {
        restaurant_name: "Sushi Palace",
        restaurant_rating: "4.6",
        restaurant_offer: "25% Off",
        restaurant_location: "Mumbai",
        restaurant_category: "Japanese",
        restaurant_time: "45 mins"
      },
      {
        restaurant_name: "Arabian Delight",
        restaurant_rating: "4.3",
        restaurant_offer: "15% Off",
        restaurant_location: "Chennai",
        restaurant_category: "Arabian",
        restaurant_time: "40 mins"
      },
      {
        restaurant_name: "Healthy Bowl",
        restaurant_rating: "4.4",
        restaurant_offer: "10% Off",
        restaurant_location: "Bangalore",
        restaurant_category: "Healthy",
        restaurant_time: "20 mins"
      },
      {
        restaurant_name: "The Coffee Spot",
        restaurant_rating: "4.8",
        restaurant_offer: "Free Pastry",
        restaurant_location: "Hyderabad",
        restaurant_category: "Cafe",
        restaurant_time: "15 mins"
      },
      {
        restaurant_name: "Chinese Express",
        restaurant_rating: "4.0",
        restaurant_offer: "20% Off",
        restaurant_location: "Delhi",
        restaurant_category: "Chinese",
        restaurant_time: "30 mins"
      }
    ]
  });

  console.log("⭐ Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
