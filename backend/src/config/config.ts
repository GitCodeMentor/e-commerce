import { config } from "dotenv";
config();

export const PORT = process.env.MI_BAN || 5000
