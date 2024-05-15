import express, { Request, Response, NextFunction } from "express";
import {
  getJobs,
  // getJobById,
  // addJob,
  // updateJob,
  // deleteJob
} from "../service/jobService";

const router = express.Router();

const idChecker = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const newId = +id;
  if (newId > 0) next();
  else res.status(404).send("Id not found");
};

router.get("/", getJobs);

export default router;

//
