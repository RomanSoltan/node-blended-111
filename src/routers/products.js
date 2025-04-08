import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  addProductController,
  getAllProductsController,
  getProductByIdConstroller,
} from '../controllers/products.js';

const productsRouter = Router();

productsRouter.get('/', ctrlWrapper(getAllProductsController));

productsRouter.get('/:id', ctrlWrapper(getProductByIdConstroller));

productsRouter.post('/', ctrlWrapper(addProductController));

export default productsRouter;
