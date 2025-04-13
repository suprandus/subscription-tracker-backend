import { Router } from "express";

const subscriptionRouter = Router();

// GET
subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "GET all subscriptions" })
);

subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "GET subscription details" })
);

subscriptionRouter.get("/user/:id", (req, res) =>
  res.send({ title: "GET all user subscriptions" })
);

subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "GET upcoming renewals" })
);

// POST
subscriptionRouter.post("/", (req, res) =>
  res.send({ title: "CREATE subscription" })
);

// PUT
subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "UPDATE subscription" })
);
subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "CANCEL subscription" })
);

// DELETE
subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "DELETE subscription" })
);

export default subscriptionRouter;
