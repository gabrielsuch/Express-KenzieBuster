import {Request, Response, NextFunction} from "express"


const verifyAdminPermissionMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if(req.newUser && !req.newUser.isAdm) {
        return res.status(401).json({error: "Missing Admin Permission"})
    }

    next()
}


export default verifyAdminPermissionMiddleware