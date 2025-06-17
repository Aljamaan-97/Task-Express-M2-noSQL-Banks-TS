import { Request, Response, NextFunction } from "express";

const notfound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: `the Route is not found = ${req.path}` });
};

export default notfound;
