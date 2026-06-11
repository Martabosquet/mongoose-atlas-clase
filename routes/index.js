import express from "express";
const router = express.Router();
import usersRoutes from "./users.js";

router.use('/', usersRoutes);

export default router;