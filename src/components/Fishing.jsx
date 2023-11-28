import React from "react";
import '../styles/tailwind.css'

const Fishing = () => {
  return (
    <>
      <section className="Welcome pt-[100px]">
        <div className="flex flex-col">
          <div className="w-[609px] mx-auto font-jua h-[324px] py-[30px] bg-white border-[16px]  border-[#35529D] rounded-[51px]">
          </div>

          <button className="w-[178px] mt-[25px] mr-[60%] ml-[40%] h-[106px] bg-[#FFEB37] rounded-[202px] text-[60px] text-[#A4B8FF] shadow-md font-normal">
            FISH
          </button>

        </div>
      </section>
    </>
  );
};

export default Fishing;