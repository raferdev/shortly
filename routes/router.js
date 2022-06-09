import express from "express";
import getRootController from "../controllers/root/getRootController.js";

const router = express.Router();

router.get("/",getRootController)

export default router;