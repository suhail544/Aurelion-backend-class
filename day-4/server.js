const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
app.use(express.json());

app.get("/", (req, res) => {
  // 1. Data from Frontend

  // 2. DB logic

  // 3. Data to Frontend
  res.send("Success");
});

app.get("/restaurants", async (req, res) => {
  try {
    // 1. Data from frontend


    // 2. DB logic
    const db_data = await prisma.restaurant.findMany();


    // 3. Data to frontend
    res.status(200).json({
      message: "success",
      result: db_data.length,
      data: db_data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Cant fetch data",
    });
  }
});

// fetch single data using header
app.get("/restaurant", async (req, res) => {
  try {
    // 1. Data from frontend
    const data = req.headers.restaurant_id;


    // 2. DB logic
    const db_data = await prisma.restaurant.findUnique({
      where: {
        restaurant_id: data,
      },
    });


    // 3. Data to frontend
    res.status(200).json({
      message: "success",
      data: db_data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Cant fetch data",
    });
  }
});

app.post("/restaurants", async (req, res) => {
  try {
    // 1. Data from Frontend
    const data = req.body;


    // 2. DB logic
    const db_data = await prisma.restaurant.create({
      data: {
        restaurant_id: data.restaurant_id,
        restaurant_name: data.restaurant_name,
        restaurant_rating: data.restaurant_rating,
        restaurant_offer: data.restaurant_offer,
        restaurant_location: data.restaurant_location,
        restaurant_category: data.restaurant_category,
        restaurant_time: data.restaurant_time,
      },
    });


    // 3. Data to Frontend
    res.status(200).json({
      message: "Created",
      data: db_data,
    });
  } catch (err) {
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

app.put("/restaurants", async (req, res) => {
  try {
    // 1. Data from Frontend
    const data = req.body;


    // 2. DB logic
    const db_data = await prisma.restaurant.update({
      where: {
        restaurant_id: data.restaurant_id,
      },
      data: {
        restaurant_id: data.restaurant_id,
        restaurant_name: data.restaurant_name,
        restaurant_rating: data.restaurant_rating,
        restaurant_offer: data.restaurant_offer,
        restaurant_location: data.restaurant_location,
        restaurant_category: data.restaurant_category,
        restaurant_time: data.restaurant_time,
      },
    });


    // 3. Data to Frontend
    res.status(200).json({
      message: "Updated",
      data: db_data,
    });
  } catch (err) {
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

app.delete("/restaurants", async (req, res) => {
  // 1. Data from Frontend
  const data = req.query;
  console.log(data.restaurant_id);


  // 2. DB logic
  await prisma.restaurant.delete({
    where: {
      restaurant_id: data.restaurant_id,
    },
  });

  
  // 3. Data to Frontend
  res.status(200).json({
    message: "Deleted ",
  });
});

app.listen(3000);
