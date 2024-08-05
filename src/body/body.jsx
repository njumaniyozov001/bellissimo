import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Nav from "../nav";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import im1 from "./body_img/1.webp";
import im2 from "./body_img/2.webp";
import im3 from "./body_img/3.webp";
import pen from "./body_img/pen.png";

import { Link, useNavigate } from "react-router-dom";
import { RiTelegramLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

import axios from "axios";

const Body = () => {
  const [isDeliver, setDeliver] = useState(true);
  const [isReceive, setReceive] = useState(false);
  const [modalService, setModalService] = useState(false);
  const [modalReceive, setModalReceive] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [filial, setFilial] = useState("Filialni tanla");
  const location = [
    {
      id: 1,
      name: "ShoxShaverma",
      location: "daretal aldi",
      schedule: "10:00-02:00",
    },
    { id: 2, name: "Evos", location: "daretal", schedule: "10:00-02:00" },
    {
      id: 3,
      name: "Baxram",
      location: "TaTu tarafda",
      schedule: "10:00-02:00",
    },
    {
      id: 4,
      name: "Favvora",
      location: "Ishonch ong taraf",
      schedule: "10:00-02:00",
    },
    {
      id: 5,
      name: "Saroy",
      location: "baynalminal kocha",
      schedule: "10:00-02:00",
    },
    {
      id: 6,
      name: "Olimp kafe",
      location: "Muqimiy kocha",
      schedule: "10:00-02:00",
    },
    {
      id: 7,
      name: "Chuqur",
      location: "ishonch old taraf",
      schedule: "10:00-02:00",
    },
    {
      id: 8,
      name: "Chuqur",
      location: "ishonch old taraf",
      schedule: "10:00-02:00",
    },
  ];
  const navigate = useNavigate();
  const deliver = () => {
    if (!isDeliver) {
      setDeliver(true);
    }
    if (isReceive) {
      setReceive(false);
    }
  };

  const receive = () => {
    if (!isReceive) {
      setReceive(true);
    }
    if (isDeliver) {
      setDeliver(false);
    }
  };

  const chooseService = () => {
    if (isDeliver) {
      setModalService(!modalService);
    }
    if (isReceive) {
      setModalReceive(!modalReceive);
    }
  };

  const inputSetting = (id) => {
    setSelectedId(id);
    location.map((val) => {
      if (val.id === id) {
        setFilial(val.name);
      }
      setModalReceive(false);
    });
  };
  const API = "https://aee1693157058a72.mokky.dev/cards";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(API).then((res) => setData(res.data));
  }, []);

  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  const selectFood=(id)=>{
console.log(id);
  }

  return (
    <div className="mt-5 relative w-[100%] h-[100vh] ">
      <div className="flex items-center justify-center ">
        <Swiper modules={[Navigation, Pagination]} navigation pagination loop>
          <SwiperSlide>
            <img
              src={im1}
              className="sm:h-[400px] sm:w-[90vw] w-[85vw] h-[150px]   m-auto rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={im2}
              className="sm:h-[400px] sm:w-[90vw] w-[85vw] h-[150px]   m-auto rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={im3}
              className="sm:h-[400px] sm:w-[90vw] w-[85vw] h-[150px]   m-auto rounded-2xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {nav ? (
        <div className={`fixed inset-0 z-30 bg-black bg-opacity-40 `}>
          <Nav closeNav={closeNav} />
        </div>
      ) : (
        <div
          onClick={openNav}
          className="absolute sm:hidden left-2 top-[34%] text-black   flex items-center justify-center hover:cursor-pointer"
        >
          <IoMenu className="w-6 h-6 rounded-full" />
        </div>
      )}

      <div className="flex items-center justify-center sm:flex-row flex-col gap-3 sm:justify-around  mt-[40px]">
        <div className="sm:w-[400px] sm:h-[40px] sm:text-[16px] w-[220px] h-[25px]  text-[12px] flex items-center justify-center  sm:gap-[60px] gap-[10px] rounded-[45px] bg-gray-100">
          <div
            onClick={deliver}
            className={`sm:w-[200px] sm:h-[30px] w-[150px] h-[20px] hover:cursor-pointer text-center rounded-[45px] ml-1  flex items-center  justify-center ${
              isDeliver ? "bg-white" : ""
            }`}
          >
            <p>Yetkazib berish</p>
          </div>
          <div
            onClick={receive}
            className={`sm:w-[200px] sm:h-[30px] w-[150px] h-[20px] hover:cursor-pointer text-center rounded-[45px] mr-1  flex items-center justify-center ${
              isReceive ? "bg-white" : ""
            }`}
          >
            <p>Olib ketish</p>
          </div>
        </div>
        <div
          onClick={chooseService}
          className="sm:w-[500px] sm:h-[40px] w-[220px] h-[25px] sm:text-[16px] text-[12px] rounded-xl flex items-center justify-between border-[1px] border-orange-500 text-orange-500 hover:cursor-pointer"
        >
          {isDeliver && (
            <p className="ml-2">Yetkazib berish manzilini tanlang</p>
          )}
          {isReceive && <p className="ml-2">{filial}</p>}
          <img
            src={pen}
            className="sm:w-[20px] w-[16px] text-orange-500 mr-2"
          />
        </div>
      </div>
      {modalService && (
        <div
          onClick={chooseService}
          className="fixed inset-0 z-20 bg-black bg-opacity-40 flex items-center justify-center"
        >
          <div
            onClick={chooseService}
            className="sm:w-[400px] sm:h-[170px] w-[250px] h-[150px] z-30 flex items-center justify-center sm:gap-2 gap-3 flex-col text-center rounded-3xl bg-white"
          >
            <p className="sm:text-[16px] text-[12px] font-bold">bla bla bla</p>
            <p className="sm:text-[16px] text-[12px]">
              Saytning toooooo'liq funksiyasidan <br />
              foydalanish uchun tizimga kiring
            </p>
            <Link to={"/Kirish"}>
              <button className="sm:px-[100px] sm:py-[10px] px-[40px] py-[1px] rounded-[35px] bg-green-500">
                Tizimga kirish
              </button>
            </Link>
          </div>
        </div>
      )}
      {modalReceive && (
        <div
          onClick={() => setModalReceive(false)}
          className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-40"
        >
          <div className=" relative sm:h-[500px] sm:w-[450px] h-[300px] w-[300px] flex items-center justify-center flex-row flex-wrap py-4 gap-3 sm:rounded-[30px] rounded-[20px] overflow-y-scroll hide-scrollbar bg-white">
            {location.map((item) => (
              <div
                key={item.id}
                className=" sm:w-[400px] sm:h-[100px] w-[250px] h-[60px] flex justify-between items-center sm:leading-5 leading-[13px] sm:rounded-2xl rounded-[10px] bg-gray-100 shadow-black"
              >
                <div className="ml-2 sm:text-[16px] text-[12px]">
                  <p className="font-bold">{item.name}</p>
                  <p>{item.location}</p>
                  <p className="font-thin font-serif">
                    Ish vaqti: <br />
                    {item.schedule}
                  </p>
                </div>
                <span
                  onClick={() => inputSetting(item.id)}
                  className={`w-[20px] h-[20px] mr-2 bg-white rounded-[50%] ${
                    selectedId === item.id ? "border-4 border-green-700" : ""
                  }`}
                ></span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        className={`flex items-center justify-center z-10 flex-wrap mt-5 gap-3 sticky top-0 bg-white sm:h-10 sm:w-full p-1`}
      >
        <div className="sm:w-[100px] sm:h-[25px] w-[65px] h-[18px] sm:text-[16px] text-[12px] rounded-2xl bg-slate-100 text-center hover:bg-slate-300">
          Kombo
        </div>
        <div className="sm:w-[100px] sm:h-[25px] w-[65px] h-[18px] sm:text-[16px] text-[12px] rounded-2xl bg-slate-100 text-center hover:bg-slate-300">
          Pitsa
        </div>
        <div className="sm:w-[100px] sm:h-[25px] w-[65px] h-[18px] sm:text-[16px] text-[12px] rounded-2xl bg-slate-100 text-center hover:bg-slate-300">
          Gazaklar
        </div>
        <div className="sm:w-[100px] sm:h-[25px] w-[65px] h-[18px] sm:text-[16px] text-[12px] rounded-2xl bg-slate-100 text-center hover:bg-slate-300">
          Ichimliklar
        </div>
        <div className="sm:w-[100px] sm:h-[25px] w-[65px] h-[18px] sm:text-[16px] text-[12px] rounded-2xl bg-slate-100 text-center hover:bg-slate-300">
          Salatlar
        </div>
        <div className="sm:w-[100px] sm:h-[25px] w-[65px] h-[18px] sm:text-[16px] text-[12px] rounded-2xl bg-slate-100 text-center hover:bg-slate-300">
          Desertlar
        </div>
        <div className="sm:w-[100px] sm:h-[25px] w-[65px] h-[18px] sm:text-[16px] text-[12px] rounded-2xl bg-slate-100 text-center hover:bg-slate-300">
          Ichimliklar
        </div>
        <Link
          to={"/cart"}
          className="sm:w-[90px] sm:h-[25px] w-[70px] h-[18px]  sm:text-[18px] text-[14px] flex items-center gap-1 hover:cursor-pointer hover:scale-105  rounded-2xl px-2 bg-red-500"
        >
          <p>Savatcha</p>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
        {data.map((item) => (
          <div
            key={item.name}
            id="card"
            onClick={()=>{selectFood(item.id)}}
            className="sm:w-[280px] sm:h-[360px] w-[180px] h-[230px]  sm:text-[16px] text-[12px] sm:leading-5 leading-[15px] rounded-2xl p-2 relative   hover:scale-[1.03] transition-transform duration-300 shadow-md"
          >
            <div className="flex items-center justify-center">
              <img src={item.img} className="w-[240px] rounded-2xl" />
            </div>
            <div className="sm:px-4">
              <p className="font-bold leading-2">{item.name}</p>
              <p className="sm:text-[16px] text-[11px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                voluptatibus?
              </p>
            </div>
            <p className="sm:w-[50px] sm:h-[20px] w-[40px] h-[15px]  absolute  sm:bottom-5 bottom-[5px] sm:left-5 bg-gray-400 flex items-center justify-center rounded-2xl mt-4">
              {item.price}
            </p>
          </div>
        ))}
      </div>

      <footer className="w-[100%] sm:h-[200px] h-[120px] flex items-center justify-center sm:gap-[300px] gap-10  bg-black mt-3">
        <div>
          <h6 className="sm:text-[25px] text-[14px] sm:ml-[50px] ">
            Restaurant{" "}
          </h6>
          <h6 className="sm:text-[42px] text-[18px] sm:mr-[50px] ">
            Bellisimo
          </h6>
          <h6 className="sm:text-[20px] text-[12px]">
            Qo'ng'iroq qiling - 8022
          </h6>
        </div>
        <div>
          <Link
            to={"/about"}
            onClick={() => {
              document.title = "about";
            }}
          >
            <h6 className="sm:text-[20px] text-[14px] hover:underline hover:cursor-pointer">
              Biz haqimizda
            </h6>
          </Link>
          <Link
            to={"/halal"}
            onClick={() => {
              document.title = "halal";
            }}
          >
            <h6 className="sm:text-[20px] text-[14px] hover:underline hover:cursor-pointer">
              Halal certifacate
            </h6>
          </Link>
          <Link
            to={"/restaurants"}
            onClick={() => {
              document.title = "restaranlar";
            }}
          >
            <h6 className="sm:text-[20px] text-[14px] hover:underline hover:cursor-pointer">
              Restaranlar
            </h6>
          </Link>
        </div>
        <div>
          <h6 className="sm:text-[20px] text-[12px]">Bizni kuzatib boring</h6>
          <div className="flex gap-1">
            <a href="https://t.me/njuma1yozov">
              <RiTelegramLine className="text-white rounded-full sm:w-[40px] sm:h-[40px] w-[26px] h-[26px] hover:scale-[1.1] transition-transform bg-transparent" />
            </a>
            <a href="https://instagram.com/njumaniyozov007">
              <FaInstagram className="text-white rounded-full sm:w-[40px] sm:h-[40px] w-[26px] h-[26px] hover:scale-[1.1] transition-transform bg-transparent" />
            </a>
            <a href="https://github.com/njumaniyozov">
              <FaGithub className="text-white rounded-full sm:w-[40px] sm:h-[40px] w-[25px] h-[25px] hover:scale-[1.1] transition-transform bg-transparent" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Body;
