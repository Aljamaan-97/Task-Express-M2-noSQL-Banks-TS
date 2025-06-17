import express from "express";
import upload from "../../middlewares/multer";
const accountsRouter = express.Router();
import {
  accountsGet,
  accountUpdate,
  accountDelete,
  accountCreate,
  getAccountByUsername,
} from "./accounts.controller";

accountsRouter.get("/", accountsGet);
accountsRouter.post("/", upload.single("image"), accountCreate);
accountsRouter.get("/:username", getAccountByUsername);
accountsRouter.delete("/:accountId", accountDelete);
accountsRouter.put("/:accountId", accountUpdate);

export default accountsRouter;
