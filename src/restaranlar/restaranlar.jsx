import React, { useEffect, useState } from 'react'


function restaranlar() {
    const location=[
        {
          id: 1,
          name: "ShoxShaverma",
          location: "daretal aldi",
          schedule: "10:00-02:00",
        },
        { id: 2, 
          name: "Evos", 
          location: "daretal", 
          schedule: "10:00-02:00" },
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


  return (
    <div className='w-fll flex items-center justify-center gap-4 flex-col p-4'>
     {location.map(item=>{
        return(
        <div 
        key={item.id}
        className='relative w-[90%] h-[150px] bg-gray-100 shadow-md rounded-2xl  p-3'>
            <p className='text-[20px] font-bold text-slate-500 '>{item.name}</p>
            <p className=' font-thin'>{item.location}</p>
            <p className=' font-thin'>{item.schedule}</p>
            <button className='absolute bottom-5 rounded-[30px] border-[2px] outline-none bg-white text-green-500  hover:border-green-500 h-[30px] w-[90%]'>Batafsil</button>
        </div>
          )
     })}
    </div>
  )
}

export default restaranlar