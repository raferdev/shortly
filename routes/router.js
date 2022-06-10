import express from "express";
import getRootController from "../controllers/root/getRootController.js";
import signInRouter from "./auth/signInRouter.js";
import signUpRouter from "./auth/signUpRouter.js";
import rankingRouter from "./ranking/rankingRouter.js";
import urlsRouter from "./urls/urlsRouter.js";
import userRouter from "./users/usersRouter.js";

const router = express.Router();

router.use(signUpRouter) /* /signup */
router.use(signInRouter) /* /signin */

router.use(urlsRouter) /* /urls */
router.use(userRouter) /* /users */
router.use(rankingRouter) /* /ranking */

router.get("/",getRootController)

export default router;