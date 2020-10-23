const router = global.express.Router();
const cabys = require('../controllers/cabys')

router.get('/cabys/getproducts', cabys.getProducts);

router.post('/cabys/getcategory', cabys.getCategory);

module.exports = router;
