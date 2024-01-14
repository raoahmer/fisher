import React from "react";
import '../styles/tailwind.css'
import Navbar4 from "../common/navbar4";
import Navbar from "../common/navbar";
const Collection = () => {
  return (
    <>
      <section className="Welcome place-items-center">
        <Navbar name='collection' />
        <div className="w-[95%] my-[5%] flex mx-auto">
          <img
            className="mx-auto w-[40vw] h-[75vh]"
            src="/images/collection_card.svg"
            alt="solfisher"
          />
          
          <img
            className="mx-auto  w-[40vw] h-[75vh]"
            src="/images/collection_card.svg"            
            alt="solfisher"
          />
          
          <img
            className="mx-auto  w-[40vw] h-[75vh]"
            src="/images/collection_card.svg"
            alt="solfisher"
          />
        </div>
      </section>
    </>
  );
};

export default Collection;