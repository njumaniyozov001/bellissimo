import { RiTelegramLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";



function footer() {

  return (
    <div >
      <footer className="w-full h-[300px] flex items-center justify-center gap-[300px] bg-black mt-3">
        <div>
          <h6 className="text-[25px] ml-[50px] ">Restaurant </h6>
          <h6 className="text-[42px] mr-[50px] ">Bellisimo</h6>
          <br />
          <h6>Bizga qo'ng'iroq qiling - 8022</h6>
        </div>
        <div>
            
        <Link to={'/about'}>
          <h6 className="hover:underline hover:cursor-pointer">
            Biz haqimizda
          </h6>
        </Link>
        <Link to={"/halal"}>
          <h6 className="hover:underline hover:cursor-pointer">
            Halal certifacate
          </h6>
        </Link>
        <Link to={"/restaurants"}>
          <h6 className="hover:underline hover:cursor-pointer">Restaranlar</h6>
        </Link>
        </div>
        <div>
          <h6>Bizni kuzatib boring</h6>
          <div className="flex">
            <a href="https://t.me/njuma1yozov">
              <RiTelegramLine className="text-white rounded-full w-[30px] h-[30px] hover:scale-[1.1] transition-transform bg-transparent" />
            </a>
            <a href="https://instagram.com/njumaiyozov007">
              <FaInstagram className="text-white rounded-full w-[30px] h-[30px] hover:scale-[1.1] transition-transform bg-transparent" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
