import React from "react";
import data from "../../../data/data";

function ComingSoonContent() {
  const { description, title } = data;
  return (
    <>
      <div className="relative flex flex-col  place-items-center ">
        <img src={'/logo_extended.svg'} width={350}/>
        <h2 className="text-center font-bold m-10 text-4xl sm:text-5xl lg:text-6xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem]	 ">
          <span className="bg-clip-text text-transparent bg-[#A651B0]">
            {title}
          </span>
          <span className="">⏳</span>
        </h2>
        <p
          className="text-2xl md:text-2xl px-6 max-w-3xl text-center text-slate-800 dark:text-slate-100 font-thin"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></p>
      </div>
    </>
  );
}

export default ComingSoonContent;
