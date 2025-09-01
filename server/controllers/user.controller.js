import { prisma } from "../config/prisma.js";

export const getAllUsersController = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        profilePhoto: true,
        whatsapp: true,
        facebook: true,
      },
    });
    if (!users)
      return res.status(404).json({ error: "No volunteers were found" });
    res.status(200).json(users);
  } catch (error) {
    console.error("getAllUsers controller Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
