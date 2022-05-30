import {Request, Response} from "express"
import getDvdService from "../../services/dvd/getDvd.service"


const getDvdController = async (req: Request, res: Response) => {
    try {
        const dvd = await getDvdService()
        
        return res.status(dvd.status).json(dvd.message)
    }
    catch(err) {
        console.error(err)
    }
}


export default getDvdController