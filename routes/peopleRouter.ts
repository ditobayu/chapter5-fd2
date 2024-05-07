import express, { Request, Response, NextFunction } from "express";
import {
  getPeople,
  getPeopleById,
  addPeople,
  updatePeople,
  deletePeople,
  // uploadImagePeople,
  // cdnUploadImagePeople,
} from "../service/peopleService";
// import upload from "../middleware/uploadHandler";
// import cdnUploadHandler from "../middleware/cdnUploadHandler";

const router = express.Router();

const idChecker = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const newId = +id;
  if (newId > 0) next();
  else res.status(404).send("Id not found");
};

router.get("/", getPeople);

// router.post("/upload", upload.single("image"), uploadImagePeople);
// router.post(
//   "/upload/cdn",
//   cdnUploadHandler.single("image"),
//   cdnUploadImagePeople
// );
router.get("/:id", idChecker, getPeopleById);
router.post("/", addPeople);
router.put("/:id", idChecker, updatePeople);
router.delete("/:id", idChecker, deletePeople);

export default router;
