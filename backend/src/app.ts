import express from "express";
import productRoutes from "./routes/products.route";
import { notFoundMiddleware } from "./middlewares/notFound.middleware";

const app = express();

app.use(express.json());

app.use("/", productRoutes);

app.use(notFoundMiddleware);

export default app;
