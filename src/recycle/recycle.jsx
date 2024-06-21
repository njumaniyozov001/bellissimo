import { Link } from "react-router-dom"

const rec=()=>{
    return(
        <div className=" w-full h-full text-red-500 text-center tex-[60px]">
            hello world
            <Link to='/' className="text-blue-500">go home</Link>
        </div>
    )
}
export default rec