import jwt from "jsonwebtoken";
import UserSchema from "./../model/user.js";

const isLoggined = async (req, res, next) => {
  const token = req.header("x-access-token");
  if (!token) return res.status(401).send("access denied");
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const user = await UserSchema.findById(decoded._id);
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send(err);
  }
};

export default isLoggined;
