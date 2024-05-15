import { Request, Response } from "express";
import { products } from "../data";
import { Product } from "../types";

const getProducts = (req: Request, res: Response): void => {
  res.status(200).json(products);
};

const getProductById = (req: Request, res: Response): void => {
  const { id } = req.params;
  const newId = +id;
  const product: Product | undefined = products.find(
    (product) => product.id === newId
  );
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

const addProduct = (req: Request, res: Response): void => {
  console.log(req.body);
  const { id, name, description, price } = req.body;
  const newProduct: Product = {
    id,
    name,
    description,
    price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

const updateProduct = (req: Request, res: Response): void => {
  const { id } = req.params;
  const newId = +id;
  console.log(req.body);
  const { name, description, price } = req.body;
  const product: Product | undefined = products.find(
    (product) => product.id === newId
  );
  if (product) {
    product.name = name;
    product.description = description;
    product.price = price;
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

const deleteProduct = (req: Request, res: Response): void => {
  const { id } = req.params;
  const newId = +id;
  const product: Product | undefined = products.find(
    (product) => product.id === newId
  );
  if (product) {
    products.splice(products.indexOf(product), 1);
    res.status(200).json({ message: "Product deleted" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

export {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
