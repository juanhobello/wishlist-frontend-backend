import express from "express";
import productRoutes from "./routes/products.route";
import { notFoundMiddleware } from "./middlewares/notFound.middleware";
import cors from "cors"

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", productRoutes);

app.use(notFoundMiddleware);

export default app;
