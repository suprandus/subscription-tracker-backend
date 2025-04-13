import express from "express";
import { PORT } from "./config/env.js";

import connectToDatabase from "./database/mongodb.js";

// Import routes
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import subscriptionRouter from "./routes/subscription.route.js";

const app = express();

// Use routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Subscription Tracker API!");
});

app.listen(PORT, async () => {
  console.log(`Subcription Tracker API is running on http://localhost:${PORT}`);

  await connectToDatabase();
});

// Export app instance for testing
export default app;
