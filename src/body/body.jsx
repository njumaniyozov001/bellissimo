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


import { Link,  useNavigate } from "react-router-dom";

import axios from "axios";

const Body = () => {
  const [isDeliver, setDeliver] = useState(true);
  const [isReceive, setReceive] = useState(false);
  const [modalService, setModalService] = useState(false);
  const [modalReceive, setModalReceive] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [filial, setFilial] = useState("Filialni tanla");
  const location=[
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
  console.log(data);

  return (
    <div>
      <Swiper modules={[Navigation, Pagination]} navigation pagination loop>
        <SwiperSlide>
          <img src={im1} className="w-[90vw] h-[400px] m-auto rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={im2} className="w-[90vw] h-[400px] m-auto rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={im3} className="w-[90vw] h-[400px] m-auto rounded-2xl" />
        </SwiperSlide>
      </Swiper>

      <div className="flex items-center justify-center gap-[60px] mt-[40px]">
        <div className="w-[400px] h-[40px] flex items-center justify-center text-[20px] gap-[60px] rounded-[45px] bg-gray-100">
          <div
            onClick={deliver}
            className={`w-[200px] h-[30px] hover:cursor-pointer text-center rounded-[45px] ml-1 ${
              isDeliver ? "bg-white" : ""
            }`}
          >
            <p>Yetkazib berish</p>
          </div>
          <div
            onClick={receive}
            className={`w-[200px] h-[30px] hover:cursor-pointer text-center rounded-[45px] mr-1 ${
              isReceive ? "bg-white" : ""
            }`}
          >
            <p>Olib ketish</p>
          </div>
        </div>
        <div
          onClick={chooseService}
          className="w-[600px] h-[40px] rounded-xl flex items-center justify-between border-[1px] border-orange-500 text-orange-500"
        >
          {isDeliver && (
            <p className="ml-2">Yetkazib berish manzilini tanlang</p>
          )}
          {isReceive && <p className="ml-2">{filial}</p>}
          <img src={pen} className="w-[20px] text-orange-500 mr-2" />
        </div>
      </div>
      {modalService && (
        <div
          onClick={chooseService}
          className="fixed inset-0 z-20 bg-black bg-opacity-40 flex items-center justify-center"
        >
          <div
            onClick={chooseService}
            className=" w-[400px] h-[170px] z-30 flex items-center justify-center gap-2 flex-col text-center rounded-3xl bg-white"
          >
            <p className="font-bold">bla bla bla</p>
            <p className="text-[14px]">
              Saytning toooooo'liq funksiyasidan foydalanish uchun <br />
              tizimga kiring
            </p>
            <button className="px-[100px] py-[10px] rounded-[35px] bg-green-500">
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
          <div className=" relative h-[500px] w-[450px] flex items-center justify-center flex-row flex-wrap py-4 gap-3 rounded-[30px] overflow-y-scroll hide-scrollbar bg-white">
            {location.map((item) => (
              <div
                key={item.id}
                className="  w-[400px] h-[100px] mr-2 flex justify-between items-center leading-5 rounded-2xl bg-gray-100 shadow-black"
              >
                <div className="ml-2">
                  <p className="font-bold text-[16px]">{item.name}</p>
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

      <div className="flex items-center justify-around h-[50px] mt-6">
        <div className="flex text-[18px] gap-5">
          <div className="w-[100px] h-[30px] rounded-2xl bg-slate-100 text-center hover:bg-slate-300">
            Kombo
          </div>
          <div className="w-[100px] h-[30px] rounded-2xl bg-slate-100 text-center hover:bg-slate-300">
            Pitsa
          </div>
          <div className="w-[100px] h-[30px] rounded-2xl bg-slate-100 text-center hover:bg-slate-300">
            Gazaklar
          </div>
          <div className="w-[100px] h-[30px] rounded-2xl bg-slate-100 text-center hover:bg-slate-300">
            Ichimliklar
          </div>
          <div className="w-[100px] h-[30px] rounded-2xl bg-slate-100 text-center hover:bg-slate-300">
            Salatlar
          </div>
          <div className="w-[100px] h-[30px] rounded-2xl bg-slate-100 text-center hover:bg-slate-300">
            Desertlar
          </div>
          <div className="w-[100px] h-[30px] rounded-2xl bg-slate-100 text-center hover:bg-slate-300">
            Ichimliklar
          </div>
        </div>
        <Link
          to={"/cart"}
          className="w-[130px] h-[30px] flex text-[18px] gap-1 hover:cursor-pointer hover:scale-105  rounded-2xl px-2 bg-red-500"
        >
          <p>Savatcha |</p>
          <p>0</p>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
        {data.map((item) => (
          
          <div
            id="card"
            className=" w-[300px] h-[400px] shadow-2xl  rounded-2xl p-2 relative bg-gray-200  hover:scale-[1.03] transition-transform duration-300"
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
            <p className="w-[50px] h-[20px]  absolute  bottom-5 bg-gray-400 flex items-center justify-center rounded-2xl mt-4">
              {item.price}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Body;
