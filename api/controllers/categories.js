import Categories from "../models/Categories.js";
import { createError } from "../error.js";

//get single category
export const getCategory = async (req, res, next) => {
    try {
        const category = await Categories.findById(req.params.id);
        res.status(200).json(category);
    } catch (err) {
        next(err);
    }
}

//get all categories
export const getCategories = async (req, res, next) => {
    try {
        const categories = await Categories.find();
        res.status(200).json(categories);
    } catch (err) {
        next(err);
    }
}

//add a new category
export const addCategory = async (req, res, next) => {
    try {
        const newCategory = new Categories({ ...req.body });
        await newCategory.save();
        res.status(200).send("A new category has been added.");
    } catch (err) {
        next(err);
    }
}

//update existing category
export const updateCategory = async (req, res, next) => {
    try {
        const updatedCategory = await Categories.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCategory)
    } catch (err) {
        next(err);
    }
}

//delete category
export const deleteCategory = async (req, res, next) => {
    try {
        await Categories.findByIdAndDelete(req.params.id);
        res.status(200).json("Category has been deleted.");
    } catch (err) {
        next(err);
    }
}