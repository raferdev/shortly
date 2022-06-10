import express from "express";
import getUsersController from "../../controllers/users/getUsersController.js";
import authSessionMiddleware from "../../middlewares/authSessionMiddleware.js";

const userRouter = express.Router();

userRouter.get("/users/:id",authSessionMiddleware,getUsersController);

export default userRouter;