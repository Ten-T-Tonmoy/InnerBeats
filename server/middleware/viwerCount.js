import { prisma } from "../config/prisma.js";

let lastCalled = 0;
export const viewerCount = async (req, res, next) => {
  try {
    const now = Date.now();
    if (now - lastCalled >= 300) {
      await prisma.visitor.create({
        data: {
          ip: String(
            req.headers["x-forwarded-for"] || req.connection.remoteAddress
          ),
        },
      });
      lastCalled = now;
      console.log(Date.now() - lastCalled);
    }
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
