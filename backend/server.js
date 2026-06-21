const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const messageRoutes = require("./routes/messageRoutes");
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/messages", messageRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Miklajung Academy API is running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});