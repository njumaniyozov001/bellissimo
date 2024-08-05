import { MdInput } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiPizza } from "react-icons/ci";
import { GiHappySkull } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav({ closeNav }) {
  const city = ["Toshkent", "Samarqand", "Andijon", "Qo'qon", "Farg'ona", "Chirchiq", "Buxoro", "Olmaliq", "Nurafshon", "Angren", "Yangiyul"];
  const [loc, setLoc] = useState(false);
  const [newLoc, setNew] = useState('Tashkent');
  
  const openCity = () => {
    setLoc(!loc);
  }

  const changeLoc = (id) => {
  console.log(id);
    setNew(id);
    setLoc(!loc);
  }

  return (
    <div className="absolute top-0 left-0 px-2 w-[70%] h-[100vh] z-30 flex gap-5 text-[12px] flex-col bg-white shadow-md">
      <div 
        onClick={openCity}
        className={`mt-2 flex justify-between items-center h-[40px] bg-gray-50 rounded-3xl px-5 ${loc ? 'shadow-sm' : ''} `}>
        <p>{newLoc}</p>
        <FaCaretDown className={`w-[30px] h-4 transition duration-300 ${loc ? 'rotate-180 ' : ''} `} />
      </div>
      {loc && (
        <div className={`flex flex-col gap-1 transition-transform duration-700 ${loc ? 'translate-y-0 ' : ''} `}>
          {city.map((item) => (
            <p 
              key={item}
              onClick={() => { changeLoc(item) }}
              className="hover:cursor-pointer hover:underline ml-2"
            >{item}</p>
          ))}
        </div>
      )}
      <Link to={"/Kirish"}>
        <div className="flex items-center bg-gray-50 h-[40px] rounded-2xl">
          <MdInput className="w-[40px]" />
          <p>Kirish</p>
        </div>
      </Link>
      <Link to={"/"}>
        <div className="flex items-center bg-gray-50 h-[40px] rounded-2xl">
          <CiPizza className="w-[40px]" />
          <p>Menu</p>
        </div>
      </Link>
      <Link to={'/restaurants'}>
        <div className="flex items-center bg-gray-50 h-[40px] rounded-2xl">
          <FaLocationDot className="w-[30px]" />
          <p>Restaranlar</p>
        </div>
      </Link>
      <div className="flex items-center bg-gray-50 h-[40px] rounded-2xl">
        <GiHappySkull className="w-[30px]" />
        <p>Aksiyalar</p>
      </div>
      <div className="flex items-center bg-gray-50 h-[40px] rounded-2xl ">
        <FaPhoneAlt className="w-[30px]" />
        <p>Bizga qo'ng'iroq qiling</p>
      </div>
      <div
        onClick={closeNav}
        className="absolute top-1 w-6 h-6 bg-white shadow-md rounded-full flex items-center justify-center left-[100%] hover:cursor-pointer">
        X
      </div>
    </div>
  );
}

export default Nav;
