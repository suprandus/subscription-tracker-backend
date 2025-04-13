import { Router } from "express";

const userRouter = Router();

// GET  
userRouter.get("/", (req, res) => res.send({ title: "GET all users" }));
userRouter.get("/:id", (req, res) => res.send({ title: "GET user details" }));

// POST
userRouter.post("/", (req, res) => res.send({ title: "CREATE new user" }));

// PUT
userRouter.put("/:id", (req, res) => res.send({ title: "UPDATE user" }));

//DELETE
userRouter.delete("/:id", (req, res) => res.send({ title: "DELETE user" }));

export default userRouter;
