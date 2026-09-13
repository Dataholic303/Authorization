const Router = require('express')

const router = new Router()

const BrandController = require('../controllers/brandController')
const deviceController = require('../controllers/deviceController')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)

module.exports = router