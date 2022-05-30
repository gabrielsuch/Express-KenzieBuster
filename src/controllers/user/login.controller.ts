import {Request, Response} from "express"
import loginService from "../../services/user/login.service"


const loginController = async (req: Request, res: Response) => {
    try {
        const login = await loginService(req.body)
        
        return res.status(login.status).json(login.message)
    }
    catch(err) {
        console.error(err)
    }
}


export default loginController