import express from "express";
import getRootController from "../controllers/root/getRootController.js";
import signInRouter from "./auth/signInRouter.js";
import signUpRouter from "./auth/signUpRouter.js";

const router = express.Router();

router.use(signUpRouter) /* /signup */
router.use(signInRouter) /* /signin */


router.get("/",getRootController)

export default router;