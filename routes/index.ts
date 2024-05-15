import { Router } from "express";
import PeopleRouter from "./peopleRouter";
import BookRouter from "./bookRouter";
import ProductRouter from "./productRouter";
import JobRouter from "./jobRouter";

const router = Router();

router.use("/people", PeopleRouter);
router.use("/product", ProductRouter);
router.use("/book", BookRouter);
router.use("/job", JobRouter);

export default router;
