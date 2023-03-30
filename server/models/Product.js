import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
