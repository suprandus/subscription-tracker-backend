import { Router } from "express";

const authRouter = Router();

// GET
authRouter.get("/", (req, res) =>
  res.send({ title: "Welcome to auth routes" })
);

// POST
authRouter.post("/sign-in", (req, res) => res.send({ title: "Sign In" }));
authRouter.post("/sign-up", (req, res) => res.send({ title: "Sign Up" }));
authRouter.post("/sign-out", (req, res) => res.send({ title: "Sign Out" }));

export default authRouter;
