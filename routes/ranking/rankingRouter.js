import express from "express";
import getRankingController from "../../controllers/ranking/getRankingController.js";
import schemaMiddleware from "../../middlewares/schemaMiddleware.js";

const rankingRouter = express.Router();

rankingRouter.get("/ranking", schemaMiddleware,getRankingController);

export default rankingRouter;