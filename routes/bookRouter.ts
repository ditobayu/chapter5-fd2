import express, { Request, Response, NextFunction } from "express";
import {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} from "../service/bookService";

const router = express.Router();

const idChecker = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const newId = +id;
  if (newId > 0) next();
  else res.status(404).send("Id not found");
};

router.get("/", getBooks);
router.get("/:id", idChecker, getBookById);
router.post("/", addBook);
router.put("/:id", idChecker, updateBook);
router.delete("/:id", idChecker, deleteBook);

export default router;
