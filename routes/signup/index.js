import express from "express";
import controller from "./controller.js";
import validator from "./validator.js";
const router = express.Router();

router.post(
  "/",
  validator.validatorSignup(),
  controller.validate,
  controller.signup
);
export default router;
