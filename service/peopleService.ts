import { Request, Response } from "express";
import { people } from "../data";
// import cloudinary from "../middleware/cloudinary";
// import { UploadedFile } from "express-fileupload";
import { Person } from "../types";

const getPeople = (req: Request, res: Response): void => {
  res.status(200).json(people);
};

const getPeopleById = (req: Request, res: Response): void => {
  const { id } = req.params;
  const newId = +id;
  const person: Person | undefined = people.find(
    (person) => person.id === newId
  );
  if (person) {
    res.status(200).json(person);
  } else {
    res.status(404).json({ message: "Person not found" });
  }
};

const addPeople = (req: Request, res: Response): void => {
  console.log(req.body);
  const { id, name, username, email } = req.body;
  const newPerson: Person = {
    id,
    name,
    username,
    email,
  };
  people.push(newPerson);
  res.status(201).json(newPerson);
};

const updatePeople = (req: Request, res: Response): void => {
  const { id } = req.params;
  const newId = +id;
  const { name, username, email } = req.body;
  const person: Person | undefined = people.find(
    (person) => person.id === newId
  );
  if (person) {
    person.name = name;
    person.username = username;
    person.email = email;
    res.status(200).json(person);
  } else {
    res.status(404).json({ message: "Person not found" });
  }
};

const deletePeople = (req: Request, res: Response): void => {
  const { id } = req.params;
  const newId = +id;
  const person: Person | undefined = people.find(
    (person) => person.id === newId
  );
  if (person) {
    people.splice(people.indexOf(person), 1);
    res.status(200).json({ message: "Person deleted" });
  } else {
    res.status(404).json({ message: "Person not found" });
  }
};

// const uploadImagePeople = (req: Request, res: Response): void => {
//   if (!req.file) {
//     res.status(400).json({ message: "No file uploaded" });
//     return;
//   }
//   const domain = req.protocol + "://" + req.get("host");
//   const url = `${domain}/uploads/${(req.file as UploadedFile).filename}`;
//   res.status(200).json({
//     message: "Image uploaded successfully",
//     url,
//   });
// };

// const cdnUploadImagePeople = (req: Request, res: Response): void => {
//   if (!req.file) {
//     res.status(400).json({ message: "No file uploaded" });
//     return;
//   }
//   const fileBase64: string = (req.file as UploadedFile).buffer.toString("base64");
//   const file: string = `people:${(req.file as UploadedFile).mimetype};base64,${fileBase64}`;

//   cloudinary.uploader.upload(file, (error: any, result: any) => {
//     if (error) {
//       return res.status(500).json({
//         message: "Error uploading image",
//         error,
//       });
//     }
//     res.status(200).json({
//       message: "Image uploaded successfully",
//       url: result.url,
//     });
//   });
// };

export {
  getPeople,
  getPeopleById,
  addPeople,
  updatePeople,
  deletePeople,
  //   uploadImagePeople,
  //   cdnUploadImagePeople,
};
