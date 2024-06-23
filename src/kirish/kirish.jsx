import React from "react";

const kirish = () => {
  return (
    <div className="w-full h-[80vh] relative border-[2px]  flex items-center justify-center">
      <h1 className="text-[150px] text-red-500 absolute animate-bounce">Error</h1>
      <div className="flex items-center justify-center flex-col">
        <h1>Raqamingizni kiriting</h1>
        <div className="w-[350px] h-[50px] flex bg-gray-100  items-center justify-center">
          <p>+998</p>
          <input type="text" placeholder="9012234567" className="outline-none text-[20px]"/>
        </div>
      </div>
    </div>
  );
};

export default kirish;
