import express, { Request, Response } from "express";
import Router from "../routes/index";

// const app = require("express")();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// app.get("/", (req: Request, res: Response) => {
//   res.json({ message: "Success!" });
// });

// app.get("/:id", (req: Request, res: Response) => {
//   const id: string = req.params.id;

//   res.json({ message: `Success with ID: ${id}` });
// });

app.use(Router);

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
