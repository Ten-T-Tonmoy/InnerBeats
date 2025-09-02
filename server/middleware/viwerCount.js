import { prisma } from "../config/prisma.js";

export const viewerCount = async (req, res, next) => {
  try {
    await prisma.visitor.create({
      data: {
        ip: String(
          req.headers["x-forwarded-for"] || req.connection.remoteAddress
        ),
      },
    });
    console.log("Viewer added");
  } catch (err) {
    console.error("Visitor tracking error:", err.message);
  }
  next();
};

export const siteVisited = async (req, res) => {
  try {
    await prisma.visitor.create({
      data: {
        ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
      },
    });
    res.status(201).json({ message: "Viewer added" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
