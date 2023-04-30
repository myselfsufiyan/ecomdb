import express from 'express';
import ProductServiceControllerClass from '../controller/products';
import isAutheticated from '../middleware/jwt';

const router  = express.Router();
const pController = new ProductServiceControllerClass();

router.post("/createProducts" , isAutheticated,pController.create_product);

router.put("/updateProducts/:id",isAutheticated, pController.update_product);

router.get("/getProducts/:id",isAutheticated,pController.get_product);
router.get("/getAllProduct", isAutheticated,pController.get_all_product);
router.get("/searchProductByName", isAutheticated,pController.search_product_by_name);

router.delete("/deleteProducts/:id", isAutheticated,pController.delete_product);

export default router;