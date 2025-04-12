import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";
import {
  createCategoryController,
  getCategories,
  getCategoriesCountController,
  getSubCategoriesCountController,
  upoadImageController,
} from "../controllers/category.controller.js";

const categoryRouter = Router();
categoryRouter.post(
  "/uploadImages",
  auth,
  upload.array("images"),
  upoadImageController
);
categoryRouter.post("/create", auth, createCategoryController);
categoryRouter.get("/", auth, getCategories);
categoryRouter.get("/get/count", auth, getCategoriesCountController);
categoryRouter.get("/get/count/subCat", auth, getSubCategoriesCountController);

export default categoryRouter;
