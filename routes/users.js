import express from "express";
const router = express.Router();
import {usersController} from "../controllers/users.js";


router.post("/create", usersController.createUser);
router.put("/users/:id", usersController.updateUser)
router.delete("/users/:id", usersController.deleteUser)

export default router;