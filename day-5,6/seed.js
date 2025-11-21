const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.blinkit.createMany({
     data: [
      {
        product_name: "Fresh Onion",
        product_weight: "1 kg",
        product_offer: "10% OFF",
        product_price: "₹28",
        product_delivery_time: "10 mins"
      },
      {
        product_name: "Premium Tomato",
        product_weight: "500 g",
        product_offer: "5% OFF",
        product_price: "₹22",
        product_delivery_time: "8 mins"
      },
      {
        product_name: "Aashirvaad Atta",
        product_weight: "5 kg",
        product_offer: "12% OFF",
        product_price: "₹289",
        product_delivery_time: "20 mins"
      },
      {
        product_name: "Amul Taaza Milk",
        product_weight: "1 L",
        product_offer: "2% OFF",
        product_price: "₹54",
        product_delivery_time: "12 mins"
      },
      {
        product_name: "Parle-G Biscuit",
        product_weight: "800 g",
        product_offer: "15% OFF",
        product_price: "₹65",
        product_delivery_time: "6 mins"
      },
      {
        product_name: "Red Label Tea",
        product_weight: "500 g",
        product_offer: "18% OFF",
        product_price: "₹210",
        product_delivery_time: "14 mins"
      },
      {
        product_name: "Maggi Noodles Pack",
        product_weight: "420 g",
        product_offer: "8% OFF",
        product_price: "₹58",
        product_delivery_time: "7 mins"
      },
      {
        product_name: "Fortune Sunflower Oil",
        product_weight: "1 L",
        product_offer: "10% OFF",
        product_price: "₹130",
        product_delivery_time: "18 mins"
      },
      {
        product_name: "Surf Excel Detergent",
        product_weight: "3 kg",
        product_offer: "20% OFF",
        product_price: "₹349",
        product_delivery_time: "22 mins"
      },
      {
        product_name: "Dabur Honey",
        product_weight: "500 g",
        product_offer: "25% OFF",
        product_price: "₹199",
        product_delivery_time: "9 mins"
      }
    ],
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
