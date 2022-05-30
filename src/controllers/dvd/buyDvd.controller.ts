import {Request, Response} from "express"
import buyDvdService from "../../services/dvd/buyDvd.service"


const buyDvdController = async (req: Request, res: Response) => {
    try {
        const {dvdId} = req.params
        const token = String(req.headers.authorization)
        
        const buyDvd = await buyDvdService(dvdId, req.newUser, req.body, token)
        
        return res.status(buyDvd.status).json(buyDvd.message)
    } 
    catch(err) {
        console.error(err)
    }
}


export default buyDvdController