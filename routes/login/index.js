import express from "express";
import controller from "./controller.js";
import validator from "./validator.js";
const router = express.Router();

router.post(
  "/",
  validator.validatorLogin(),
  controller.validate,
  controller.login
);
export default router;
