import { Router } from "express";
import articleRoutes from "./articles.routes";
import userRoutes from "./users.routes";

const router = Router();

router.use("/articles", articleRoutes);
router.use("/users", articleRoutes);

export default router;