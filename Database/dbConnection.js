import mongoose from "mongoose";
export const dbConnection = mongoose
  .connect("mongodb://localhost:27017/MVC")
  .then(() => console.log("Db Connected"))
  .catch(() => console.log("db error"));
