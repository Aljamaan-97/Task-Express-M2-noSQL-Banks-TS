import { NextFunction, Request, Response } from "express";
import Account from "../../models/account";

export const accountCreate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, funds, image } = req.body;
    let imagePath;
    if (req.file) {
      imagePath = req.file.path;
    }
    // console.log(req.file?.path);
    const newAccount = await Account.create({
      username,
      funds,
      image: imagePath,
    });
    res.status(201).json(newAccount);
  } catch (error) {
    console.log("Error creating account:", error);
    // res.status(500).json({ message: "Internal server error" });
    next(error);
    return;
  }
};

export const accountDelete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { accountId } = req.params;
  try {
    const deletedAccount = await Account.findByIdAndDelete(accountId);
    if (deletedAccount) {
      res.status(200).json({ message: "Account deleted successfully" });
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } catch (error) {
    console.log("Error deleting account:", error);
    // res.status(500).json({ message: "Internal server error" });
    next(error);
    return;
  }
};

export const accountUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { accountId } = req.params;
    const { username, funds } = req.body;
    const updatedAccount = await Account.findByIdAndUpdate(accountId, {
      username,
      funds,
    });

    if (updatedAccount) {
      res.status(200).json(updatedAccount);
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } catch (error) {
    console.error("Error updating account:", error);
    // res.status(500).json({ message: "Internal server error" });
    next(error);
  }
};

export const accountsGet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allAccounts = await Account.find();

    res.status(200).json(allAccounts);
  } catch (error) {
    console.error("Error fetching accounts:", error);
    next(error);
  }
};

export const getAccountByUsername = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.params;

  try {
    const accountbyusername = await Account.findOne({ username });
    res.status(200).json(accountbyusername);
  } catch (error) {
    console.error("Error fetching account by username:", error);
    // res.status(500).json({ message: "Internal server error" });
    next(error);
  }
};
