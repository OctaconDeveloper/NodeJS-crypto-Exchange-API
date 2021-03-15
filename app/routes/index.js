const { Router } = require("express");
const router = Router(); 

const apiRoutes = require('./api');
 
router.use('/api/v1',apiRoutes);


module.exports = router; 