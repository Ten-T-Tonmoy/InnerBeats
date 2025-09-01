import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma.js";
import { generateTokenAndSetCookie } from "../services/generateToken.js";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// ---------------------------- Sign Up ------------------------------
export const signupController = async (req, res) => {
  const { name, email, password, whatsapp, facebook, phone, profilePhoto } =
    req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser)
      return res.status(400).json({ error: "Email already in use ." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        whatsapp,
        facebook,
        phone,
        profilePhoto,
      },
    });
    const userToShow = {
      name: user.name,
      email: user.email,
      whatsapp: user.whatsapp,
      facebook: user.facebook,
      profilePhoto: user.profilePhoto,
    };
    const token = generateTokenAndSetCookie(user.id, res);
    res.status(200).json({
      message: "user registered and signed in",
      userToShow,
      token, //incase?
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong while siging up" });
  }
};

//------------------------------- Log in ---------------------------------

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (!existingUser)
      return res.status(404).json({
        error: "user not found ! please register",
      });

    const passMatched = await bcrypt.compare(password, existingUser.password);
    if (!passMatched)
      return res.status(401).json({
        error: "wrong password (sign in)",
      });

    const token = generateTokenAndSetCookie(existingUser.id, res);

    const userToShow = {
      name: existingUser.name,
      email: existingUser.email,
      whatsapp: existingUser.whatsapp,
      facebook: existingUser.facebook,
      profilePhoto: existingUser.profilePhoto,
    };
    res.status(200).json({
      message: "Sign in successfull !",
      userToShow,
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong while logging in" });
  }
};

//----------------------------getuser-----------------------------------

export const getUserController = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select: {
        id: true,
        name: true,
        email: true,
        profilePhoto: true,
        whatsapp: true,
        facebook: true,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(" getUser controller Error", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
