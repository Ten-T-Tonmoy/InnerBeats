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

//--------------------------------past history-------------------------------

export const getUserHistoryController = async (req, res) => {
  try {
    const userId = req.user.id;
    const gottenUser = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        pastChoices: true,
      },
    });
    //user.pastChoices
    if (!user) {
      return res.status(404).json({
        error: "User not logged in",
      });
    }

    res.status(200).json(gottenUser.pastChoices);
  } catch (error) {
    console.error("getting user history controller Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//-----------------------------------add past history----------------------------

export const addToHistoryController = async (req, res) => {
  try {
    const userId = req.user.id;
    /**
     *  emotion      String
        ChosenReason String
        isHelpful    Boolean
     */
    const { emotion, option, isHelpful } = req.body;
    if (!option || !emotion) {
      return res.status(400).json({ error: "Choice option is required" });
    }

    const choice = await prisma.choices.create({
      data: {
        emotion,
        ChosenReason: option,
        isHelpful,
        User: {
          connect: { id: userId },
        },
      },
    });

    const updatedUser = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        pastChoices: true,
      },
    });

    res.status(201).json(updatedUser);
  } catch (error) {
    console.error("adding user history  controller Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
