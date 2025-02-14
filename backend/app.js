require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

// Import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const referralRoutes = require("./routes/referral");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/referrals", referralRoutes);

module.exports = app;