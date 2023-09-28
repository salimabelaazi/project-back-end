const express = require("express")

// import{registerController,
//     LoginController,
//     testController,
//     forgotPasswordController,
// } from '../controllers/authController.js';
// import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const {registerController,
    loginController,
    testController,
    forgotPasswordController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    orderStatusController
} = require("../controllers/authController")
const {isAdmin, requireSignIn} = require("../middlewares/authMiddleware")

const router =express.Router();



router.post('/register',registerController);

router.post('/login', loginController);
router.post('/forgot-password', forgotPasswordController )

router.get('/test', requireSignIn,isAdmin, testController);

router.get('/user-auth', requireSignIn, (req,res) => {
    res.status(200).send({ok:true});
});

router.get('/admin-auth', requireSignIn,isAdmin, (req,res) => {
    res.status(200).send({ok:true});
});
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);


module.exports = router