import express from "express";
import cors from "cors";
import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middlewares/rateLimiter.js";

const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(rateLimiter);
app.use("/api/notes", noteRoutes);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});
