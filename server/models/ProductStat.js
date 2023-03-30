import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);

export default ProductStat;
