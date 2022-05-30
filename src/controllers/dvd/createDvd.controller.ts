import {Request, Response} from "express"
import createDvdService from "../../services/dvd/createDvd.service"


const createDvdController = async (req: Request, res: Response) => {
    try {

        const dvd = await createDvdService(req.body, req.newUser)
        
        return res.status(dvd.status).json(dvd.message)
    }
    catch(err) {
        console.error(err)
    }
}


export default createDvdController