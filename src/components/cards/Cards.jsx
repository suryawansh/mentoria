import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-col justify-between items-center ">
      <div className="flex flex-row justify-normal">
        <div className="flex flex-row justify-normal m-[30px]  border  shadow-blue-95 p-12 bg-#fff  rounded">
          <div>
            <img
              src={require("../../assets/directions.png")}
              alt="directions "
            />
          </div>
          <div className="flex flex-col">
            <div className="">
              <h3 className="font-semibold text-blue-950 text-3xl ">
                12,000+ Career Options
              </h3>
            </div>
            <div className="w-[320px] text-gray-500 text-[18px]">
              Find out which one is best suited to your interests, personality
              and abilities, and what will it take for you to begin your journey
              down that path.
            </div>
          </div>
        </div>
        <div className=" flex flex-row justify-normal m-[30px]  border  shadow-blue-95 p-12 bg-#fff  rounded">
          <div>
            <img src={require("../../assets/entracnceexam.png")} />
          </div>
          <div className="flex flex-col">
            <div>
              <h3 className="font-semibold text-blue-950 text-3xl ">
                Education vs Employability
              </h3>
            </div>
            <div className="w-[320px] text-gray-500 text-[18px]">
              You may have the right degree but do you have the right skill-set
              to land a job? Discover how to prepare to get into your chosen
              career.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-normal">
        <div className="flex flex-row justify-normal m-[30px]  border  shadow-blue-95 p-12 bg-#fff  rounded">
          <div>
            <img
              src={require("../../assets/directions.png")}
              alt="directions "
            />
          </div>
          <div className="flex flex-col">
            <div className="">
              <h3 className="font-semibold text-blue-950 text-3xl ">
                12,000+ Career Options
              </h3>
            </div>
            <div className="w-[320px] text-gray-500 text-[18px]">
              Find out which one is best suited to your interests, personality
              and abilities, and what will it take for you to begin your journey
              down that path.
            </div>
          </div>
        </div>
        <div className=" flex flex-row justify-normal m-[30px]  border  shadow-blue-95 p-12 bg-#fff  rounded">
          <div>
            <img src={require("../../assets/entracnceexam.png")} />
          </div>
          <div className="flex flex-col">
            <div>
              <h3 className="font-semibold text-blue-950 text-3xl ">
                Education vs Employability
              </h3>
            </div>
            <div className="w-[320px] text-gray-500 text-[18px]">
              You may have the right degree but do you have the right skill-set
              to land a job? Discover how to prepare to get into your chosen
              career.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
