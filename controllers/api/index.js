const router = require('express').Router();
const userRoutes = require('./userRoutes');
const toolRoutes = require('./toolRoutes');
const mailRoutes = require('./mailRoutes');

router.use('/users', userRoutes);
router.use('/tools', toolRoutes);
router.use('/borrow', mailRoutes);



module.exports = router;
