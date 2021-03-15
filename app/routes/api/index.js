const { Router } = require("express");
const router = Router(); 
const walletRoutes = require('./wallet');
const authenticationRoutes = require('./authentication');
const tradeRoutes  = require('./trade');

router.use('/wallet',walletRoutes);
router.use('/auth',authenticationRoutes);
router.use('/trade',tradeRoutes);


module.exports = router; 