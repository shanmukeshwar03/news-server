import { Router } from 'express'
import controller from '../Controllers/index.js'
import Cache from '../Middleware/Cache.js'

const router = Router()

router.use(Cache)
router.get('/headlines', controller)
router.get('/business', controller)
router.get('/general', controller)
router.get('/science', controller)
router.get('/sports', controller)
router.get('/health', controller)
router.get('/technology', controller)
router.get('/entertainment', controller)

export default router
