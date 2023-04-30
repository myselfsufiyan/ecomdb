import express from 'express';
import orderServiceControllerClass from '../controller/order';
import isAutheticated from '../middleware/jwt';

const router  = express.Router();
const pController = new orderServiceControllerClass();

router.post("/createorders",isAutheticated, pController.create_order);
router.get("/getorders/:id",isAutheticated,pController.get_order);
router.get("/getAllorder",isAutheticated,pController.get_all_order);

export default router;