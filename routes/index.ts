import { Router } from "express";
import PeopleRouter from "./peopleRouter";

const router = Router();

router.use("/people", PeopleRouter);
router.use("/product", PeopleRouter);

export default router;
