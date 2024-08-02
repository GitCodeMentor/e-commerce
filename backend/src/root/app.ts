import express from "express";
import router from "../routes/auth.route";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.use("/auth", router);

export default app;
