import React from "react";
import '../styles/tailwind.css'
const Collection = () => {
  return (
    <>
      <section className="Welcome grid h-screen place-items-center">
        <div className="w-[95%] font-jua mx-auto my-auto h-[887px] py-[30px] bg-[#FFEB37] rounded-[81px]">
          <div className="flex justify-between pr-[40px]">
            <div></div>
            <button className="w-[727px] border-4 border-[#2364C5] h-[122px] bg-white rounded-[67px] text-[80px] text-[#A4B8FF] shadow-md font-normal">
              COLLECTION
            </button>
            <img
              className="w-[79px] h-[79px]"
                src="/images/arrow.svg"
                alt="solfisher"
              />
          </div>
            <div className="w-70% pl-[50px] mt-[40px] mx-auto">
              <div className="flex">
                <img
                  className="w-[79px] h-[79px]"
                    src="/images/star.svg"
                    alt="solfisher"
                  />
                <div className="text-[80px] pl-[12px] text-[#A4B8FF] font-normal">1-STAR (4/15)</div>
              </div>
              <div className="flex justify-center gap-3 items-center w-[75%]">
                  <img
                    className="w-[186px] h-[168px]"
                      src="/images/black_fish.svg"
                      alt="solfisher"
                    />
                    <img
                  className="w-[230px] h-[194px]"
                    src="/images/Clown_fish.svg"
                    alt="solfisher"
                  />
                  <img
                  className="w-[195px] h-[166px]"
                    src="/images/King_crab.svg"
                    alt="solfisher"
                  />
                  <div className="w-[186px]">
                    <img
                    className="w-[42px] h-[86px]"
                      src="/images/question_mark.svg"
                      alt="solfisher"
                    />
                  </div>
                  <div className="w-[186px]">
                    <img
                    className="w-[42px] h-[86px]"
                      src="/images/question_mark.svg"
                      alt="solfisher"
                    />
                  </div>
                  <img
                  className="w-[182px] h-[165px]"
                    src="/images/Salmon_fish.svg"
                    alt="solfisher"
                  />
              </div>
            </div>
            <div className="w-70% mx-auto mt-[170px] pl-[50px]">
              <div className="flex">
                <img
                  className="w-[79px] h-[79px]"
                    src="/images/star.svg"
                    alt="solfisher"
                  />
                  <img
                  className="w-[79px] h-[79px]"
                    src="/images/star.svg"
                    alt="solfisher"
                  />
                <div className="text-[80px] pl-[12px] text-[#A4B8FF] font-normal">2-STARS (6/20)</div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Collection;