import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getAllProductsController,
  getProductByIdConstroller,
} from '../controllers/products.js';

const productsRouter = Router();

productsRouter.get('/', ctrlWrapper(getAllProductsController));

productsRouter.get('/:id', ctrlWrapper(getProductByIdConstroller));

export default productsRouter;
