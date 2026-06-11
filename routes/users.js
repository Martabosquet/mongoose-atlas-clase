import express from "express";
const router = express.Router();
import User from "../models/User.js";


router.post("/create", async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a user" });
    }
});

export default router;