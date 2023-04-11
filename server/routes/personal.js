import { Router } from 'express'
import { createPersonal } from '../controllers/personal.js'
//import { checkAuth } from '../utils/checkAuth.js'
const router = new Router()

// Register
// http://localhost:3002/api/personal
router.post('/person', createPersonal)

export default router