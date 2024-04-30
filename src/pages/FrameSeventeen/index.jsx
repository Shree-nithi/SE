import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button } from "../../components";
import Header4 from "../../components/Header4";

export default function FrameSeventeenPage() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center w-full gap-[98px] px-14 py-16 md:gap-[73px] md:p-5 sm:gap-[49px] bg-gray-100">
        <Header4 className="w-[89%]" />
        <div className="flex md:flex-col justify-between items-center w-full mb-[5px] gap-5 mx-auto max-w-[1174px]">
          <div className="flex flex-col w-[39%] md:w-full gap-[42px] md:p-5">
            <div className="flex flex-col gap-[34px]">
              <div className="flex flex-col gap-[21px]">
                <Heading as="h1" className="!text-cyan-800 tracking-[2.32px] uppercase !text-[16.55px]">
                  E-COURSE PLATFORM
                </Heading>
                <div className="flex flex-col gap-[35px]">
                  <Heading size="6xl" as="h2" className="!text-black-900 tracking-[-2.27px] !text-[56.75px]">
                    <>
                      Learning and
                      <br />
                      teaching online,
                      <br />
                      made easy.
                    </>
                  </Heading>
                  <Heading
                    size="lg"
                    as="h3"
                    className="w-[84%] md:w-full !text-gray-700 tracking-[-0.76px] !text-[18.92px]"
                  >
                    <>
                      Gain subject certification or earn money
                      <br />
                      while teaching online with GlobalTalk.
                    </>
                  </Heading>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Heading as="h4" className="!text-black-900 tracking-[-0.66px] !text-[16.55px]">
                  Sign In →
                </Heading>
                <Button size="4xl" className="sm:px-5 tracking-[-0.66px] font-bold min-w-[149px] rounded-[14px]">
                  Learn more →
                </Button>
              </div>
            </div>
            <div className="flex md:flex-row items-center w-[84%] md:w-full gap-[94px]">
              <div className="flex flex-col">
                <div className="flex justify-center items-center gap-[9px]">
                  <Img src="images/img_vector_cyan_800.svg" alt="image" className="h-[29px]" />
                  <Heading size="4xl" as="h5" className="!text-black-900 tracking-[-1.70px] !text-[42.56px]">
                    <span className="text-black-900 font-bold">700</span>
                    <span className="text-cyan-800 font-bold">+</span>
                  </Heading>
                </div>
                <Heading as="h6" className="mt-[-2px] !text-gray-700 tracking-[-0.66px] !text-[16.55px] !font-semibold">
                  Hours of content
                </Heading>
              </div>
              <div className="w-px h-[47px] bg-gray-300" />
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-[9px]">
                  <Img src="images/img_vector_cyan_800.svg" alt="vectorone_one" className="h-[29px]" />
                  <Heading size="4xl" as="h1" className="!text-black-900 tracking-[-1.70px] !text-[42.56px]">
                    <span className="text-black-900 font-bold">575k</span>
                    <span className="text-cyan-800 font-bold">+</span>
                  </Heading>
                </div>
                <Heading as="h6" className="mt-[-1px] !text-gray-700 tracking-[-0.66px] !text-[16.55px] !font-semibold">
                  GlobalTalk Users
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-[50%] md:w-full md:p-5">
            <div className="h-[491px] w-full relative">
              <Img
                src="images/img_casual_life_3d.png"
                alt="casuallife3d"
                className="justify-center h-[491px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <Img
                src="images/img_casual_life_3d_130x212.png"
                alt="casuallife3d"
                className="h-[154px] w-[43%] bottom-[29%] right-0 m-auto object-cover absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
