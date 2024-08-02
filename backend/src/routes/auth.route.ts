import express from "express";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { SignupSchema, SigninSchema } from "../validations/auth.validation";
import { /* signin, */ signup } from "../controllers/auth.controller";

const router = express.Router();

router.post("/signup", validationMiddleware(SignupSchema), signup);/* 
router.post("/signin", validationMiddleware(SigninSchema), signin); */

export default router;
