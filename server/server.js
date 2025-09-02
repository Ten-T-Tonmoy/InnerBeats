import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { simpleCors } from "./config/cors.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import { siteVisited, viewerCount } from "./middleware/viwerCount.js";
import { prisma } from "./config/prisma.js";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

//---------------------middlewares----------------------
const app = express();
app.use(cors(simpleCors));
app.use(express.json()); //body parser
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const PORT = process.env.PORT || 3000;

app.use(viewerCount);
app.get("/test", (req, res) => {
  res.status(200).json({
    success: "Backend is live",
  });
});

app.get("/api/visitors/totalcount", async (req, res) => {
  try {
    const count = await prisma.visitor.count();
    // console.log("total visitors", count);
    res.json({ totalVisitors: count });
  } catch (err) {
    res.status(500).json({ error: "Failed to get visitor count" });
  }
});

//-------------------------routers-------------------------------

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.post("/api/viewing", siteVisited);

app.listen(PORT, () => {
  console.log(`Server Running on port : ${PORT}`);
});
