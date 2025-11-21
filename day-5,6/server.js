const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

const middleware = (req, res, next) => {
  console.log(`hello from middleware`);
  next();
};

app.use(cors());
app.use(express.json()); // core middleware
app.use(morgan("dev")); // third party middleware
app.use(middleware); // curstom middleware

app.get("/", (req, res) => {
  res.send("W");
});

app.get("/blinkit", middleware, async (req, res) => {
  try {
    const db_data = await prisma.blinkit.findMany();

    res.status(200).json({
      status: "success",
      resulut: db_data.length,
      data: db_data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err: err,
    });
  }
});

app.get("/blinkit/:id", async (req, res) => {
  try {
    // 1. data from frontend
    const data = req.params.id;

    // 2. DB logic
    const db_data = await prisma.blinkit.findUnique({
      where: {
        product_id: data,
      },
    });

    // 3. Data to frontend
    res.status(200).json({
      status: "success",
      data: db_data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err: err.message,
    });
  }
});

app.post("/blinkit", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const db_data = await prisma.blinkit.create({ data });

    res.status(200).json({
      status: "success",
      data: db_data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err: err,
    });
  }
});

app.put("/blinkit", async (req, res) => {
  try {
    // 1. data from frontend
    const data = req.body;
    console.log(data);

    // 2. db logic
    const db_data = await prisma.blinkit.update({
      where: {
        product_id: data.product_id,
      },
      data,
    });

    //3. data to frontend
    res.status(200).json({
      status: "success",
      data: db_data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err: err,
    });
  }
});

app.delete("/blinkit/:id", async (req, res) => {
  const data = req.params.id;

  await prisma.blinkit.delete({
    where: {
      product_id: data,
    },
  });

  res.status(200).json({
    status: "success",
    data: "DELETED",
  });
});


app.listen(2000);
