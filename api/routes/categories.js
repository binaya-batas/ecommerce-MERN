import express from "express";
import { verifyToken } from '../verifyToken.js'
import { getCategory, getCategories, addCategory, updateCategory, deleteCategory } from "../controllers/categories.js";

const router = express.Router();

router.get("/:id", getCategory);

router.get("/", getCategories);

router.post("/", verifyToken, addCategory)

router.put("/:id", verifyToken, updateCategory);

router.delete("/:id", verifyToken, deleteCategory);


export default router;