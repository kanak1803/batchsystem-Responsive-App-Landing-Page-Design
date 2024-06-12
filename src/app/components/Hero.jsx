import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
const Hero = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-5">
          <p className="z-10 text-6xl font-extrabold">Make The Best Financial Decisions</p>
          <img
          className=" blur absolute lg:left-[150px] lg:-top-[-40px] "
          src={"/assets/colorheroleft.png"}
          alt=""
        />
          <p className="z-10">
            Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquot
            Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Port-titor.
          </p>
          <div className="flex items-center gap-5">
            <button className="btn btn-active rounded-none flex items-center gap-3 bg-black text-white hover:bg-primary border-none">
              Get Started <BsArrowRight className="text-xl" />
            </button>
            <div className="flex gap-3 cursor-pointer items-center">
              <MdSlowMotionVideo className="text-3xl" />
              <p className="text-xl font-medium">Watch</p>
            </div>
          </div>
          <img className="h-[350px] " src="/assets/downhero.svg" alt="" />
        </div>
        <img className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ..." src="/assets/hero.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
