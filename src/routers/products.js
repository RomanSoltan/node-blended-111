import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  addProductController,
  deleteProductController,
  getAllProductsController,
  getProductByIdConstroller,
  patchProductController,
} from '../controllers/products.js';
import { isValidId } from '../middlewares/isValidId.js';

const productsRouter = Router();

productsRouter.get('/', ctrlWrapper(getAllProductsController));

productsRouter.get('/:id', isValidId, ctrlWrapper(getProductByIdConstroller));

productsRouter.post('/', ctrlWrapper(addProductController));

productsRouter.patch('/:id', isValidId, ctrlWrapper(patchProductController));

productsRouter.delete('/:id', isValidId, ctrlWrapper(deleteProductController));

export default productsRouter;
