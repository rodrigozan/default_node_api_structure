import express from 'express'
import controller from './user.controller'

const router = express.Router()

router.get('/users/', controller.get)

router.get('/user/:id/', controller.getById)

router.post('/user/', controller.post)

router.put('/user/:id/', controller.update)

router.delete('/user/:id/', controller.delete)

export default router