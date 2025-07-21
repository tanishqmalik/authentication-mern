import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./routes/auth.js"

dotenv.config()

const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/auth", authRoutes);

// mongoose.connect(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`✅ Server running at http://localhost:${process.env.PORT}`)
    );
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => console.error("❌ MongoDB connection failed:", err));