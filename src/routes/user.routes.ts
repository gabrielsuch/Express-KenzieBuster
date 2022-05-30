import {Router} from "express"

import createUserController from "../controllers/user/createUser.controller"
import loginController from "../controllers/user/login.controller"

import verifyEmailExistsMiddleware from "../middlewares/verifyEmailExists.middleware"
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware"
import verifyAdminPermissionMiddleware from "../middlewares/verifyAdminPermission.middleware"


const route = Router()


export const userRoutes = () => {
    route.post("/register", verifyEmailExistsMiddleware, verifyTokenMiddleware, verifyAdminPermissionMiddleware, createUserController)
    route.post("/login", loginController)

    return route
}
