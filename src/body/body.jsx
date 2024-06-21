import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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

  return (
    <div>
      <Swiper modules={[Navigation, Pagination]} navigation pagination loop>
        <SwiperSlide>
          <img src={im1} className="sm:h-[400px] sm:w-[90vw] w-[70vw] h-[200px]   m-auto rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={im2} className="sm:h-[400px] sm:w-[90vw] w-[70vw] h-[200px]   m-auto rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={im3} className="sm:h-[400px] sm:w-[90vw] w-[70vw] h-[200px]   m-auto rounded-2xl" />
        </SwiperSlide>
      </Swiper>

      <div className="flex items-center justify-center flex-wrap sm:gap-[60px] gap-[12px] mt-[40px]">
        <div className="sm:w-[400px] sm:h-[40px] sm:text-[16px] w-[250px] h-[25px]  text-[12px] flex items-center justify-center  sm:gap-[60px] gap-[10px] rounded-[45px] bg-gray-100">
          <div
            onClick={deliver}
            className={`sm:w-[200px] sm:h-[30px] w-[150px] h-[16px] hover:cursor-pointer text-center rounded-[45px] ml-1  flex items-center  justify-center ${
              isDeliver ? "bg-white" : ""
            }`}
          >
            <p>Yetkazib berish</p>
          </div>
          <div
            onClick={receive}
            className={`sm:w-[200px] sm:h-[30px] w-[150px] h-[16px] hover:cursor-pointer text-center rounded-[45px] mr-1  flex items-center justify-center ${
              isReceive ? "bg-white" : ""
            }`}
          >
            <p>Olib ketish</p>
          </div>
        </div>
        <div
          onClick={chooseService}
          className="sm:w-[600px] sm:h-[40px] w-[220px] h-[25px] sm:text-[20px] text-[12px] rounded-xl flex items-center justify-between border-[1px] border-orange-500 text-orange-500 hover:cursor-pointer"
        >
          {isDeliver && (
            <p className="ml-2">Yetkazib berish manzilini tanlang</p>
          )}
          {isReceive && <p className="ml-2">{filial}</p>}
          <img src={pen} className="sm:w-[20px] w-[16px] text-orange-500 mr-2" />
        </div>
      </div>
      {modalService && (
        <div
          onClick={chooseService}
          className="fixed inset-0 z-20 bg-black bg-opacity-40 flex items-center justify-center"
        >
          <div
            onClick={chooseService}
            className="sm:w-[400px] sm:h-[170px] w-[250px] h-[120px] z-30 flex items-center justify-center sm:gap-2 gap-1 flex-col text-center rounded-3xl bg-white"
          >
            <p className="sm:text-[16px] text-[12px] font-bold">bla bla bla</p>
            <p className="sm:text-[16px] text-[12px]">
              Saytning toooooo'liq funksiyasidan <br />foydalanish uchun 
              tizimga kiring
            </p>
            <button className="sm:px-[100px] sm:py-[10px] px-[40px] py-[1px] rounded-[35px] bg-green-500">
              Tizimga kirish
            </button>
          </div>
        </div>
      )}
      {modalReceive && (
        <div
          onClick={() => setModalReceive(false)}
          className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-40"
        >
          <div className=" relative sm:h-[500px] sm:w-[450px] h-[300px] w-[300px] flex items-center justify-center flex-row flex-wrap py-4 gap-3 rounded-[30px] overflow-y-scroll hide-scrollbar bg-white">
            {location.map((item) => (
              <div
                key={item.id}
                className=" sm:w-[400px] sm:h-[100px] w-[250px] h-[60px] flex justify-between items-center sm:leading-5 leading-[13px] rounded-2xl bg-gray-100 shadow-black"
              >
                <div className="ml-2 sm:text-[16px] text-[12px]">
                  <p className="font-bold">{item.name}</p>
                  <p >{item.location}</p>
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

      <div className="flex items-center justify-around flex-wrap h-[50px] mt-6">
        <div className="flex text-[18px] flex-wrap gap-5">
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
          className="sm:w-[130px] sm:h-[25px] w-[100px] h-[18px]  sm:text-[18px] text-[14px] flex items-center gap-1 hover:cursor-pointer hover:scale-105  rounded-2xl px-2 bg-red-500"
        >
          <p>Savatcha |</p>
          <p>0</p>
        </Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
        {data.map((item) => (
          <div
            key={item.name}
            id="card"
            className="sm:w-[300px] sm:h-[400px] w-[200px] h-[250px] shadow-2xl sm:text-[16px] text-[12px] sm:leading-5 leading-[15px] rounded-2xl p-2 relative bg-gray-500  hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="flex items-center justify-center">
              <img src={item.img} className="w-[280px] rounded-2xl" />
            </div>
            <div>
              <p className="font-bold leading-2">{item.name}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                voluptatibus?
              </p>
            </div>
            <p className="sm:w-[50px] sm:h-[20px] w-[40px] h-[15px]  absolute  sm:bottom-5 bottom-2 bg-gray-400 flex items-center justify-center rounded-2xl mt-4">
              {item.price}
            </p>
          </div>
        ))}
      </div>

      <footer className="w-[100%] sm:h-[300px] h-[120px] flex items-center justify-center sm:gap-[300px] gap-3 p-10 bg-black mt-3">
        <div>
          <h6 className="sm:text-[25px] text-[14px] sm:ml-[50px] ">Restaurant </h6>
          <h6 className="sm:text-[42px] text-[18px] sm:mr-[50px] ">Bellisimo</h6>
          <h6 className="sm:text-[20px] text-[12px]">Bizga qo'ng'iroq qiling - 8022</h6>
        </div>
        <div>
          <Link to={"/about"}>
            <h6 className="sm:text-[16px] text-[12px] hover:underline hover:cursor-pointer">
              Biz haqimizda
            </h6>
          </Link>
          <Link to={"/halal"}>
            <h6 className="sm:text-[16px] text-[12px] hover:underline hover:cursor-pointer">
              Halal certifacate
            </h6>
          </Link>
          <Link to={"/restaurants"}>
            <h6 className="sm:text-[16px] text-[12px] hover:underline hover:cursor-pointer">
              Restaranlar
            </h6>
          </Link>
        </div>
        <div>
          <h6 className="sm:text-[16px] text-[12px]">Bizni kuzatib boring</h6>
          <div className="flex">
            <a href="https://t.me/njuma1yozov">
              <RiTelegramLine className="text-white rounded-full sm:w-[30px] sm:h-[30px] w-[25px] h-[25px] hover:scale-[1.1] transition-transform bg-transparent" />
            </a>
            <a href="https://instagram.com/njumaiyozov007">
              <FaInstagram className="text-white rounded-full sm:w-[30px] sm:h-[30px] w-[25px] h-[25px] hover:scale-[1.1] transition-transform bg-transparent" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Body;
