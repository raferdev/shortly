import express from "express";
import postSignIn from "../../controllers/signin/postSignIn.js";

const signInRouter = express.Router();

signInRouter.post("/signin",postSignIn);

export default signInRouter;