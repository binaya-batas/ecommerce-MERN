import express from "express";
import { verifyToken } from '../verifyToken.js'

import { update, deleteUser, getUser, getUsers } from "../controllers/user.js";

const router = express.Router();

router.get("/:id", getUser);

router.get("/", getUsers);

router.put("/:id", verifyToken, update);

router.delete("/:id", verifyToken, deleteUser);


export default router;