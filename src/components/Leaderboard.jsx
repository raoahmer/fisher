import React from "react";
import '../styles/tailwind.css'

const Leaderboard = () => {
  return (
    <>
      <section className="Welcome grid h-screen place-items-center">
        <div className="w-[95%] mx-auto font-jua my-auto h-[887px] py-[30px] bg-[#FFEB37] rounded-[81px]">
          <div className="relative flex justify-between px-[100px]">
          <img
            className="w-[90px] h-[101px]"
              src="/images/trophy.svg"
              alt="solfisher"
            />
            <button className="w-[727px] border-4 border-[#2364C5] h-[122px] bg-white rounded-[67px] text-[80px] text-[#A4B8FF] shadow-md font-normal">
              LEADERBOARD
            </button>
            <img
              className="w-[79px] h-[79px]"
                src="/images/arrow.svg"
                alt="solfisher"
              />
          </div>

          <div className="w-[95%] mx-auto font-jua h-[700px] my-[20px] bg-white border-4 border-[#2364C5] rounded-[53px] p-[30px]">
            <div className="text-[30px] text-start">Best Find : ⭐ Clown Fish  Number of fish caught : 122</div>
            <div className="flex">
              <div className="text-start text-[30px] mt-[50px]">
                <img
                  className="w-[63px] h-[65px]"
                    src="/images/medal.svg"
                    alt="solfisher"
                  />
                <span className="block pl-[20px]">2</span>
                <span className="block pl-[20px]">3</span>
                <span className="block pl-[20px]">4</span>
                <span className="block pl-[20px]">5</span>
                <span className="block pl-[20px]">6</span>
                <span className="block pl-[20px]">7</span>
                <span className="block pl-[20px]">8</span>
                <span className="block pl-[20px]">9</span>
                <span className="block pl-[20px]">10</span>
              </div>
            <div className="flex p-[50px] w-[696px] justify-between">
              <div>
                PLAYER <br/> <span className="text-[#A4B8FF]">Real_PPZ</span>
              </div>
              <div>
                TOTAL FISH CAUGHT <br/> <span className="text-[#A4B8FF]">122</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leaderboard;