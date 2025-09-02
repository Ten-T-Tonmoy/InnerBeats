import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma.js";

//--------------hands out the user -pass------------------------
export const authCheckMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token)
      return res.status(401).json({
        error: "Token not found! Unauthorized",
      });

    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }

    if (!decodedToken) {
      return res.status(401).json({
        error: "unauthorized token not matched",
      });
    }

    const decodedUser = await prisma.user.findUnique({
      where: { id: decodedToken.userId },
      select: {
        id: true,
        name: true,
        email: true,
        profilePhoto: true,
        whatsapp: true,
        facebook: true,
      },
    });
    if (!decodedUser) {
      return res.status(401).json({
        error: "user not found!",
      });
    }
    req.user = decodedUser;
    console.log("Decoded user here :", decodedUser);
    next();
  } catch (e) {
    console.log("protectRoute authenticating Error", e.message);
    // no need for return bt for only res.status i might need to return incase i wanna terminate
    res.status(500).json({
      error: "internal server error authenticating",
    });
  }
};
