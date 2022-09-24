import express from "express";
import routerSignup from "./signup/index.js";
import routerLogin from "./login/index.js";
import isLoggined from "./../midalware/auth.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello word");
});

router.use("/signup", routerSignup);
router.use("/login", routerLogin);


export default router;
