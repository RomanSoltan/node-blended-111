import createHttpError from 'http-errors';
import { getAllProducts, getProductById } from '../services/products.js';

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
