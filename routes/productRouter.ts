import express, { Request, Response, NextFunction } from "express";
import {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../service/productService";

const router = express.Router();

const idChecker = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const newId = +id;
  if (newId > 0) next();
  else res.status(404).send("Id not found");
};

router.get("/", getProducts);
router.get("/:id", idChecker, getProductById);
router.post("/", addProduct);
router.put("/:id", idChecker, updateProduct);
router.delete("/:id", idChecker, deleteProduct);

export default router;
