import express, { Request, Response } from "express";
import Router from "../routes/index";

// const app = require("express")();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(Router);

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
