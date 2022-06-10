import express from "express";
import getRankingController from "../../controllers/ranking/getRankingController.js";

const rankingRouter = express.Router();

rankingRouter.get("/ranking", getRankingController);

export default rankingRouter;