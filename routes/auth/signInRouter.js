import express from "express";
import postSignIn from "../../controllers/signin/postSignIn.js";
import schemaMiddleware from "../../middlewares/schemaMiddleware.js";

const signInRouter = express.Router();

signInRouter.post("/signin",schemaMiddleware,postSignIn);

export default signInRouter;