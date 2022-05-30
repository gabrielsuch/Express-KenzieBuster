import { AppDataSource } from "../../data-source"
import { Dvd } from "../../entities/dvd.entity"
import { Stock } from "../../entities/stock.entity"


const getDvdService = async () => {
    const dvdRepository = AppDataSource.getRepository(Dvd)

    const dvds = await dvdRepository.find() 

    return {status: 200, message: dvds}
}


export default getDvdService