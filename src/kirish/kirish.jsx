import React from "react";

const kirish = () => {
  return (
    <div className="w-[100%] h-[100vh]  border-[2px]  flex items-center justify-center flex-col gap-5">
       <h1 className="sm:text-[30px] text-[18px]">Raqamingizni kiriting</h1>
      <div className="sm:w-[350px] w-[200px] sm:h-[50px] h-10 flex gap-1 bg-white shadow-md  items-center justify-center">
        <p className="text-[20px] opacity-80 ">+998</p>
        <input
          type="text"
          placeholder="901234567"
          maxLength={9}
          required
          className="outline-none placeholder:text-orange-200 w-[120px] bg-transparent text-[20px]"
        />
      </div>
      <button className="sm:px-[100px] px-10 sm:py-2 rounded-2xl text-[20px] bg-orange-400">
        Kirish
      </button>
    </div>
  );
};

export default kirish;
