import React from "react";
import { AiFillApple } from "react-icons/ai";

const GetStarted = () => {
  return (
    <div >
      <div className="container mx-auto w-[91%]  rounded-lg ">
      

        <img
          className=" absolute bottom-[100px] left-[450px]"
          src={"/assets/star48white.png"}
          alt=""
        />
        <img
          className=" absolute -left-[150px] top-[120px]"
          src={"/assets/star48.png"}
          alt=""
        />

        <img
          className=" absolute lg:-right-[130px] -top-[120px] right-20 lg:scale-100 scale-75"
          src={"/assets/star64.png"}
          alt=""
        />

        <img
          className=" absolute right-[320px] top-4 lg:scale-100 scale-75"
          src={"/assets/star64white.png"}
          alt=""
        />
        <div className="flex flex-col lg:flex-row justify-between items-center  bg-black py-5 lg:py-10 relative">
          <div className="flex flex-col gap-4 pl-4 lg:pl-20">
            <p className="text-4xl font-bold text-white">
              Ready To Get Started?
            </p>
            <p className="text-white">
              Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus <br />
              Vulputate.
            </p>
            <button className="bg-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ... text-black btn w-48 border-none flex gap-2 items-center capitalize hover:bg-primary">
              Download App
              <AiFillApple className="text-xl" />
            </button>
          </div>
          <img className="" src="/assets/getstarted.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
