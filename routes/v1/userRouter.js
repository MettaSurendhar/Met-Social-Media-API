const express = require('express');
const router = express.Router();

const userController = require('./../../controllers/userController');
const userMiddleware = require('./../../middlewares/userMiddleware');
const tokenMiddleware = require('./../../middlewares/tokenMiddleware');
const otpMiddleware = require('./../../middlewares/otpMiddleware');

// REGISTER :

router.route('/register').post(userController.registerUser);

router.route('/register/:userName').get(userController.sendRegisteredMail);

router
	.route('/register/otp/:userName')
	.get(
		userMiddleware.isUserNameExist,
		otpMiddleware.generateOtpToken,
		userController.sendOTP
	)
	.post(userController.verifyOTP);

// LOGIN :

router
	.route('/login')
	.post(
		userMiddleware.isUserNameExist,
		userMiddleware.isUserVerified,
		userController.loginUser
	);

// FORGET PASSWORD :

router
	.route('/forgetPassword/:email')
	.get(
		userMiddleware.isUserEmailIdExist,
		otpMiddleware.generateOtpToken,
		userController.sendOTP
	)
	.post(userController.verifyOTP)
	.patch(
		userMiddleware.isUserEmailIdExist,
		otpMiddleware.removeOtpToken,
		userController.resetPassword
	);

// tokenMiddleware.protectedRoute,
// 	userMiddleware.isUserIdExist,

router.route('/follow').post(userController.followUser);

module.exports = router;
