import { Request, Response } from "express";
import { books } from "../data";
import { Book } from "../types";

const getBooks = (req: Request, res: Response): void => {
  res.status(200).json(books);
};

const getBookById = (req: Request, res: Response): void => {
  const { id } = req.params;
  const newId = +id;
  const book: Book | undefined = books.find((book) => book.id === newId);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

const addBook = (req: Request, res: Response): void => {
  console.log(req.body);
  const { id, title, description, author } = req.body;
  const newBook: Book = {
    id,
    title,
    description,
    author,
  };
  books.push(newBook);
  res.status(201).json(newBook);
};

const updateBook = (req: Request, res: Response): void => {
  const { id } = req.params;
  const newId = +id;
  console.log(req.body);
  const { title, description, author } = req.body;
  const book: Book | undefined = books.find((book) => book.id === newId);
  if (book) {
    book.title = title;
    book.description = description;
    book.author = author;
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

const deleteBook = (req: Request, res: Response): void => {
  const { id } = req.params;
  const newId = +id;
  const book: Book | undefined = books.find((book) => book.id === newId);
  if (book) {
    books.splice(books.indexOf(book), 1);
    res.status(200).json({ message: "Book deleted" });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

export { getBooks, getBookById, addBook, updateBook, deleteBook };
