import React from "react";

const kirish = () => {
  return (
    <div className="w-full h-[80vh] relative border-[2px]  flex items-center justify-center">
      <h1 className="text-[150px] text-red-500 absolute animate-pulse">Error</h1>
      <div className="flex items-center justify-center flex-col">
        <h1>Raqamingizni kiriting</h1>
        <div className="x w-[350px] h-[50px] flex bg-gray-100  items-center justify-center">
          <input type="text" 
          value={"+998 ("} 
          readOnly 
          className="w-[60px] outline-none" />
          <input
            type="text"
            placeholder="_"
            className="w-[15px] outline-none"
            maxLength={1}
          />
          <input
            type="text"
            placeholder="_"
            className="w-[15px] outline-none"
            maxLength={1}
          />
          <input type="text" 
          value={")"} 
          readOnly 
          
          className="w-[15px] outline-none" />
          <input
            type="text"
            placeholder="_"
            className="w-[15px] outline-none"
            maxLength={1}
          />
          <input
            type="text"
            placeholder="_"
            className="w-[15px] outline-none"
            maxLength={1}
          />
          <input
            type="text"
            placeholder="_"
            className="w-[15px] outline-none"
            maxLength={1}
          />
          <input type="text" 
          placeholder="-" 
          readOnly 
          className="w-[15px] outline-none"
           />
          <input
            type="text"
            placeholder="_"
            className="w-[15px] outline-none"
            maxLength={1}
          />
          <input
            type="text"
            placeholder="_"
            className="w-[15px] outline-none"
            maxLength={1}
          />
          <input type="text" 
          placeholder="-" 
          readOnly 
          className="w-[15px] outline-none"/>
          <input
            type="text"
            placeholder="_"
            className="w-[15px] outline-none"
            maxLength={1}
          />
          <input
            type="text"
            placeholder="_"
            className="w-[15px]
             outline-none"
            maxLength={1}
          />
        </div>
      </div>
    </div>
  );
};

export default kirish;
