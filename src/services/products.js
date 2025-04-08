import { ProductModel } from '../db/model/Product.js';

export const getAllProducts = () => ProductModel.find();

export const getProductById = (id) => ProductModel.findOne({ _id: id });

export const addProduct = (payload) => ProductModel.create(payload);
