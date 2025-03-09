import express from 'express'
import { Createuser, Getuser } from '../controllers/UserController.js'
const routers=express.Router()
routers.post('/create',Createuser)
routers.get('/get',Getuser)

export default routers;