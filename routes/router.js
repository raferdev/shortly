import express from "express";
import getRootController from "../controllers/root/getRootController.js";
import signInRouter from "./auth/signInRouter.js";
import signUpRouter from "./auth/signUpRouter.js";
import urlsRouter from "./urls/urlsRouter.js";

const router = express.Router();

router.use(signUpRouter) /* /signup */
router.use(signInRouter) /* /signin */

router.use(urlsRouter) /* /urls */


router.get("/",getRootController)

export default router;