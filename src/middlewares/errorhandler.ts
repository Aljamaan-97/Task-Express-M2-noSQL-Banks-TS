import { Request, Response, NextFunction } from "express";

const errorhandle = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.error("Error:", err);
  res
    .status(err.status || 500)
    .json({ message: `some thing went wrong ${err.status}` });
};

export default errorhandle;
