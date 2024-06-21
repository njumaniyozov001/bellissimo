import { Link } from "react-router-dom"
import im from './cart.jpg'

const rec=()=>{
    return(
        <div className=" w-[100%] h-[100%] flex items-center justify-center gap-[100px] flex-col">
           
            <div className="flex items-center justify-center gap-7 flex-col">
            <img src={im} className="w-[250px]"/>
            <h1 className="text-[22px] font-bold ">Hozircha sizning savatchangiz bo'sh 🤔</h1>
            </div>
           <Link to={'/'} className='w-[300px] h-[40px] rounded-3xl flex items-center justify-center text-white bg-gray-900'>Menyuni ko'rish</Link>

            
        </div>
    )
}
export default rec