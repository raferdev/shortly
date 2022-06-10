import express from "express";
import getUrlController from "../../controllers/urls/id/getUrlController.js";
import postShortenController from "../../controllers/urls/shorten/postShortenController.js";
import authSessionMiddleware from "../../middlewares/authSessionMiddleware.js";

const urlsRouter = express.Router();

urlsRouter.post("/urls/shorten",authSessionMiddleware,postShortenController);
urlsRouter.get("/urls/:id",getUrlController)

export default urlsRouter;