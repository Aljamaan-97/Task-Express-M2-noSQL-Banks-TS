import { model, Schema } from "mongoose";

const accountSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    funds: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Account = model("Account", accountSchema);

export default Account;
