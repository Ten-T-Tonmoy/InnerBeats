import { prisma } from "../config/prisma.js";

export const viewerCount = async (req, res, next) => {
  try {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const existing = await prisma.visitor.findUnique({
      where: { ip: String(ip) },
    });

    if (!existing) {
      await prisma.visitor.create({
        data: { ip: String(ip) },
      });
      console.log("Viewer added");
    }
  } catch (err) {
    console.error("Visitor tracking error:", err.message);
  }
  next();
};
