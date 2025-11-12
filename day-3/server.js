const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const { data } = require("react-router-dom");
const prisma = new PrismaClient();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API working");
});

app.get("/students", async (req, res) => {
  // 1. Data from frontend

  // 2. DB logic
  const db_data = await prisma.student.findMany();

  // 3. Data to frontend
  res.send(db_data);
});

app.get("/students/:roll_no", async (req, res) => {
  // 1. Data from frontEnd
  const id = req.params.roll_no;

  // 2. DB logic
  // const db_data = await prisma.student.findUnique(req.params)
  const db_data = await prisma.student.findUnique({
    where: {
      roll_no: id,
    },
  });

  // 3. data to frontend
  res.send(db_data);
});

app.post("/students", async (req, res) => {
  // 1. Data from frontEnd
  const data = req.body;

  // 2. DB logic
  const db_data = await prisma.student.create({
    data: {
      roll_no: data.roll_no,
      class: data.class,
      name: data.name,
      section: data.section,
      DOB: data.DOB,
      phone_number: data.phone_number,
    },
  });

  // 3. data to frontend
  res.send(db_data);
});

app.put("/students/:roll_no", async (req, res) => {
  // data from front end
  const data = req.body;
  const { roll_no } = req.params;
  // db logic
  const db_data = await prisma.student.update({
    where: {
      roll_no: roll_no,
    },
    data: {
      roll_no: data.roll_no,
      class: data.class,
      name: data.name,
      section: data.section,
      DOB: data.DOB,
      phone_number: data.phone_number,
    },
  });
  // data to frontend
  res.send(db_data);
});

app.delete("/students/:roll_no", async (req, res) => {
  // data from frontend
  const { roll_no } = req.params;
  // db logic
  const db_data = await prisma.student.delete({
    where: {
      roll_no: roll_no,
    },
  });
  // data to Frontend
  res.send("DATA DELETED");
});

app.listen(1000);
