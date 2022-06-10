import express from "express";
import postSignUp from "../../controllers/signup/postSignUp.js";
import schemaMiddleware from "../../middlewares/schemaMiddleware.js";

const signUpRouter = express.Router();

signUpRouter.post("/signup",schemaMiddleware,postSignUp);

export default signUpRouter;