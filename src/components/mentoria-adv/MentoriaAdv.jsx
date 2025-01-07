import React from "react";

const MentoriaAdv = () => {
  return (
    <div className=" py-16 min-h-screen">
      <header className="text-[#00005a] text-5xl font-bold text-center mb-8">
        How It Works{" "}
      </header>
      <div className=" text-center font-medium mb-16  mx-auto text-2xl max-w-4xl">
        Here’s why Mentoria can be the best career guidance partner for your
        child during their career discovery journey.
      </div>
      <div className="flex flex-row justify-between mt-2  m-[50px] gap-x-[400px]">
        <div>
          <div className=" flex  gap-x-[56px] flex-row ml-[50px]">
            <div>
              <img
                src={require("../../assets/reliable1.png")}
                alt="reliable img"
              />
            </div>
            <div className="flex flex-col">
              <div className="">
                <h3 className=" text-start text-4xl  text-[#00005a] font-bold mb-4">
                  India’s Most Reliable Career Test
                </h3>
              </div>
              <div className="  text-start text-[20px] w-[500px]  text-[gray] leading-relaxed break-normal ">
                Created by expert psychologists and psychometricians from IIT
                Delhi, DRDO, Jamia Millia Islamia and Fergusson College, our
                assessment enables you to make scientific academic and career
                choices.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-x-[56px] ">
          <div>
            <img
              src={require("../../assets/trainedexperts.png")}
              alt="reliable img"
            />
          </div>

          <div className="flex flex-col">
            <div className="">
              <h3 className=" text-start text-4xl text-[#00005a] font-bold mb-4">
                Counselling by Trained Experts
              </h3>
            </div>
            <div className="  text-start text-[20px] w-[500px] font-normal text-[gray] leading-relaxed ">
              Our talented team of 350+ career counsellors are educators or
              psychologists, who undergo rigorous training to provide holistic
              career counselling for college students.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between mt-2  m-[50px] gap-x-[400px]">
        <div>
          <div className=" flex  gap-x-[56px] flex-row ml-[50px]">
            <div>
              <img
                src={require("../../assets/holisticinformation1.png")}
                alt="reliable img"
              />
            </div>
            <div className="flex flex-col">
              <div className="">
                <h3 className=" text-start text-4xl  text-[#00005a] font-bold mb-4">
                  Holistic Career Information
                </h3>
              </div>
              <div className="  text-start text-[20px] w-[500px]  text-[gray] leading-relaxed break-normal ">
                Our vast repository of career articles and blogs enable users to
                get a detailed understanding of their chosen careers in a
                simple, easy-to-understand manner.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-x-[56px] ">
          <div>
            <img
              src={require("../../assets/queryresolution.png")}
              alt="reliable img"
            />
          </div>

          <div className="flex flex-col">
            <div className="">
              <h3 className=" text-start text-4xl text-[#00005a] font-bold mb-4">
                Ongoing Query Resolution
              </h3>
            </div>
            <div className="  text-start text-[20px] w-[500px] font-normal text-[gray] leading-relaxed ">
              Mentoria’s users get lifetime access to our Knowledge Gateway and
              continuous resolution of career-related queries through our
              dedicated career helpline.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-2  m-[50px] gap-x-[400px]">
        <div>
          <div className=" flex  gap-x-[56px] flex-row ml-[50px]">
            <div>
              <img
                src={require("../../assets/industryinsight1.png")}
                alt="reliable img"
              />
            </div>
            <div className="flex flex-col">
              <div className="">
                <h3 className=" text-start text-4xl  text-[#00005a] font-bold mb-4">
                  Industry Insights by Experts
                </h3>
              </div>
              <div className="  text-start text-[20px] w-[500px]  text-[gray] leading-relaxed break-normal ">
                Our career webinars with industry experts enable users to
                understand a day in the life of their chosen professions, top
                challenges and required traits.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-x-[56px] ">
          <div>
            <img
              src={require("../../assets/plusguidance.png")}
              alt="reliable img"
            />
          </div>

          <div className="flex flex-col">
            <div className="">
              <h3 className=" text-start text-4xl text-[#00005a] font-bold mb-4">
                Ultimate Guidance Through Plus
              </h3>
            </div>
            <div className="  text-start text-[20px] w-[500px] font-normal text-[gray] leading-relaxed ">
              Our Plus plan users get three counselling sessions, with
              additional assistance on studying abroad, building CVs for job
              applications and more.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoriaAdv;
