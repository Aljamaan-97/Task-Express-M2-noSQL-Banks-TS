import express, { NextFunction, Request, Response } from "express";
import accountsRouter from "./api/accounts/accounts.routes";
import notfound from "./middlewares/handlenotfound";
import errorhandle from "./middlewares/errorhandler";
import cors from "cors";
import moragn from "morgan";

const app = express();
app.use(express.json());
app.use(cors());
// app.use((req: Request, res: Response, next: NextFunction) => {
//   console.log(
//     `hello ahmed you got a request of type ${req.method} request for '${
//       req.path
//     }' at ${new Date().toISOString()} from ${req.ip}`
//   );
//   next();
// });
app.use(moragn("dev"));

app.use("/accounts", accountsRouter);
// app.use(errorhandle);
// app.use(notfound);

export default app;
