import { model, Schema } from "mongoose";
import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description:String
  },
  { timestamps: { updatedAt: true } }
);
export const Product = mongoose.model("Product", schema);
