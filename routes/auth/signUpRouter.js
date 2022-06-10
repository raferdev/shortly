import express from "express";
import postSignUp from "../../controllers/signup/postSignUp.js";

const signUpRouter = express.Router();

signUpRouter.post("/signup",postSignUp);

export default signUpRouter;