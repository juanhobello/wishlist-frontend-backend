import { Request, Response, NextFunction } from "express";

export const notFoundMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({
    message: "Route not found",
  });
};
