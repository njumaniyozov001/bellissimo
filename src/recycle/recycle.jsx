import { Link } from "react-router-dom";
import im from "./cart.jpg";

const rec = () => {
  return (
    <div className=" w-[100%] h-[100vh] flex items-center justify-center gap-[100px] flex-col">
      <div className="flex items-center justify-center gap-7 flex-col">
        <img src={im} className="sm:w-[250px] w-[150px]" />
        <h1 className="sm:text-[22px] text-[18px] font-bold text-center">
          Hozircha sizning savatchangiz <br /> bo'sh 🤔
        </h1>
      </div>
      <Link
        to={"/"}
        className="sm:w-[300px] sm:h-[40px] w-[200px] h-[30px] rounded-3xl flex items-center justify-center text-white bg-gray-900"
      >
        Menyuni ko'rish
      </Link>
    </div>
  );
};
export default rec;
