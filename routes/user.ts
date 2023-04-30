import express from 'express';
import userServiceControllerClass from '../controller/user';
import isAutheticated from '../middleware/jwt';

const router  = express.Router();
const pController = new userServiceControllerClass();

router.post("/createusers", pController.create_user);
router.post("/loginuser",pController.login_user)

router.put("/updateusers/:id",isAutheticated,pController.update_user);

router.get("/getusers/:id",isAutheticated,pController.get_user);
router.get("/getAlluser",isAutheticated,pController.get_all_user);
router.get("/searchuserByName",isAutheticated,pController.search_user_by_name);

router.delete("/deleteusers/:id",isAutheticated,pController.delete_user);

export default router;