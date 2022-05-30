import {Request, Response} from "express"
import createUserService from "../../services/user/createUser.service"


const createUserController = async (req: Request, res: Response) => {
    try {    
        const token = req.headers.authorization?.split(" ")[1]
        const currentUser = req.newUser
        
        const user = await createUserService(req.body, token, currentUser)
        
        return res.status(user.status).json(user.message)
    }
    catch(err) {
        console.error(err)
    }
}


export default createUserController