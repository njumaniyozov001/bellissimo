import { useState } from "react";
import { Link } from "react-router-dom";


import logo from "./header_img/logo.png";
import location from "./header_img/location.png";
import tell from "./header_img/tell.png";
import uz from "./header_img/uz.png";
import ru from "./header_img/ru.png";
import halal_logo from "./header_img/halal.webp";
import certificate from "./header_img/halal-cert.webp";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [openImg, setImg] = useState(false);
  const [openLang, setLang] = useState(false);

  const openCity = () => {
    setModalOpen(!isModalOpen);
  };

  const openCertificate = () => {
    setImg(!openImg);
  };
  const langModal = () => {
    setLang(!openLang);
  };

  return (
    <div className="sm:h-[100px] sm:w-full hidden relative  sm:flex items-center justify-center gap-[30px] ">
      <div
        className={`w-full ${
          openImg ? "fixed top-0 bg-white z-10" : ""
        } flex items-center justify-center gap-[30px]`}
      >
        <div>
          <img src={logo} className="w-[200px]" alt="Logo" />
        </div>

        <div className="flex items-center gap-2">
          <div className="h-[40px] w-[40px] flex items-center justify-center bg-green-200 rounded-[6px]">
            <img src={location} className="w-[20px]" alt="Location" />
          </div>
          <div className="flex items-center justify-center">
            <p>
              Shahar: <br />
              <span
                onClick={openCity}
                className="hover:underline cursor-pointer leading-3 font-bold"
              >
                Tashkent
              </span>
            </p>
          </div>
        </div>

        <div className="h-[40px] flex items-center justify-center gap-2">
          <div className="px-1 h-[36px] flex items-center justify-center rounded-[4px] gap-2 bg-green-200">
            <img src={tell} className="w-[20px] h-[20px]" alt="Tell" />
            <span className="text-[20px] font-bold">1174</span>
          </div>
          <div className="flex items-center justify-center">
            <p className="leading-4">
              Yagona aloqa <br /> markaz
            </p>
          </div>
        </div>

        <div className="h-[40px] flex items-center justify-center bg-green-200 gap-2 px-1 rounded-[5px]">
          <span className="text-bold text-center text-[20px]">24/7</span>
          <p className="text-[12px]">
            Bepul yetkazish endi yetkazish 24/7 <br /> mavjud
          </p>
        </div>

        <div className="flex gap-1">
          <img src={uz} className="rounded-full w-[20px]" alt="Uz" />
          <p onClick={langModal} className="hover:underline cursor-pointer">
            Uz
          </p>
        </div>

        <div>
          <img
            onClick={openCertificate}
            src={halal_logo}
            className="h-[40px] cursor-pointer"
            alt="Halal Logo"
          />
        </div>
        <div>
          <Link to={'/kirish'}>
          <button  className="bg-gradient-to-r bg-green-500 from-lime-700 px-5 py-3 rounded-3xl">
            Kirish
          </button>
          </Link>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-10"
          onClick={openCity}
        >
          <div className="bg-white w-[300px] h-[270px] flex items-center justify-center gap-8 rounded-lg text-[20px]">
            <div>
              <p className="hover:underline cursor-pointer">Andijon</p>
              <p className="hover:underline cursor-pointer">Buxoro</p>
              <p className="hover:underline cursor-pointer">Farg'ona</p>
              <p className="hover:underline cursor-pointer">Jizzax</p>
              <p className="hover:underline cursor-pointer">Namangan</p>
            </div>
            <div>
              <p className="hover:underline cursor-pointer">Navoiy</p>
              <p className="hover:underline cursor-pointer">Qashqadaryo</p>
              <p className="hover:underline cursor-pointer">Surxondaryo</p>
              <p className="hover:underline cursor-pointer">Samarqand</p>
              <p className="hover:underline cursor-pointer">Toshkent</p>
            </div>
          </div>
        </div>
      )}

      {openImg && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20">
          <img
            onClick={openCertificate}
            src={certificate}
            className="max-w-full max-h-full cursor-pointer"
          />
        </div>
      )}
      {openLang && (
        <div
          onClick={langModal}
          className="fixed  z-20 right-[315px] top-[80px] w-[50px] h-[40px] bg-slate-100 flex items-center justify-center rounded-xl gap-[3px]"
        >
          <img src={ru} className="w-[16px]" />
          <p className="hover:underline cursor-pointer">Py</p>
        </div>
      )}

    </div>
  );
};

export default Header;
