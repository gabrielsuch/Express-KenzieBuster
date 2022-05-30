import { Router } from "express"

import getDvdController from "../controllers/dvd/getDvd.controller"
import createDvdController from "../controllers/dvd/createDvd.controller"
import buyDvdController from "../controllers/dvd/buyDvd.controller"

import verifyTokenMiddleware from "../middlewares/verifyToken.middleware"
import verifyAdminPermissionMiddleware from "../middlewares/verifyAdminPermission.middleware"

const route = Router()


export const dvdRoutes = () => {
    route.get("", getDvdController)
    route.post("/register", verifyTokenMiddleware, verifyAdminPermissionMiddleware, createDvdController)
    route.post("/buy/:dvdId", verifyTokenMiddleware, buyDvdController)

    return route
}