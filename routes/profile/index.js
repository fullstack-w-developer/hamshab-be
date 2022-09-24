import express from "express";
import controller from "./controller.js";
import validator from "./validator.js";
const router = express.Router();

router.patch("/edit", controller.validate, controller.editProfile);
export default router;
