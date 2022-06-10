import express from "express";
import deleteUrlController from "../../controllers/urls/id/deleteUrlController.js";
import getUrlController from "../../controllers/urls/id/getUrlController.js";
import getOpenUrlController from "../../controllers/urls/open/getOpenUrlController.js";
import postShortenController from "../../controllers/urls/shorten/postShortenController.js";
import authSessionMiddleware from "../../middlewares/authSessionMiddleware.js";
import schemaMiddleware from "../../middlewares/schemaMiddleware.js";

const urlsRouter = express.Router();

urlsRouter.post("/urls/shorten", schemaMiddleware,authSessionMiddleware, postShortenController);
urlsRouter.get("/urls/:id",getUrlController);
urlsRouter.get("/urls/open/:shortUrl", getOpenUrlController);
urlsRouter.delete("/urls/:id", authSessionMiddleware, deleteUrlController);

export default urlsRouter;
