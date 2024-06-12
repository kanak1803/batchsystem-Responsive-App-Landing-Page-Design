import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
const Features = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <img className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ..." src="/assets/subhero.svg" alt="" />
        <div className="flex flex-col gap-5 items-start">
          <p className="text-primary font-medium text-lg items-start">
            Features
          </p>
          <p className="text-4xl font-bold items-start z-10">Uifry Premium</p>
          <img
            className=" blur absolute  right-5"
            src={"/assets/colorfeaturesright.png"}
            alt=""
          />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src="/assets/budget.svg" alt="" />
              <p className="text-2xl font-semibold z-10">Budgeting Intervals</p>
            </div>

            <p className="z-10">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src="/assets/b2.svg" alt="" />
              <p className="text-2xl font-semibold">Budgeting Intervals</p>
            </div>

            <p className="z-10">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src="/assets/b3.svg" alt="" />
              <p className="text-2xl font-semibold">Budgeting Intervals</p>
            </div>

            <p>
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
