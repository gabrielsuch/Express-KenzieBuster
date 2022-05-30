import {Router} from "express"

import cartPayController from "../controllers/cart/cartPay.controller"

import verifyTokenMiddleware from "../middlewares/verifyToken.middleware"

const route = Router()


export const cartRoutes = () => {
    route.put("/pay", verifyTokenMiddleware, cartPayController)

    return route
}