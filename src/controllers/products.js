import createHttpError from 'http-errors';
import {
  addProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProduct,
} from '../services/products.js';

export const getAllProductsController = async (req, res) => {
  const data = await getAllProducts();

  res.json({
    status: 200,
    message: 'Successfully found products!',
    data,
  });
};

export const getProductByIdConstroller = async (req, res) => {
  const { id } = req.params;
  const data = await getProductById(id);

  if (!data) {
    throw createHttpError(404, 'Product not found');
  }

  res.json({
    status: 200,
    message: `Successfully found product with id ${id}!`,
    data,
  });
};

export const addProductController = async (req, res) => {
  const data = await addProduct(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data,
  });
};

export const patchProductController = async (req, res) => {
  const { id } = req.params;
  const data = await updateProduct(id, req.body);

  if (!data) {
    throw createHttpError(404, 'Product not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully patched a product!',
    data,
  });
};

export const deleteProductController = async (req, res) => {
  const { id } = req.params;
  const data = await deleteProductById(id);

  if (!data) {
    throw createHttpError(404, 'Product not found');
  }

  res.status(204).send();
};
