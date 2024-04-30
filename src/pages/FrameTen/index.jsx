import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button } from "../../components";
import Header2 from "../../components/Header2";

export default function FrameTenPage() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <div>
          <div className="flex flex-col items-center gap-[84px] p-[31px] md:gap-[63px] sm:gap-[42px] sm:p-5 bg-gray-100 rounded-[48px]">
            <Header2 className="w-[75%]" />
            <div className="flex md:flex-col justify-end w-[84%] md:w-full mb-[5px] gap-[31px]">
              <div className="flex flex-col w-[44%] md:w-full gap-[35px] md:p-5">
                <div className="flex flex-col gap-[29px]">
                  <div className="flex flex-col gap-[17px]">
                    <Heading size="s" as="h1" className="!text-cyan-800 tracking-[1.96px] uppercase !font-bold">
                      E-COURSE PLATFORM
                    </Heading>
                    <div className="flex flex-col gap-[30px]">
                      <Heading size="5xl" as="h2" className="!text-black-900 tracking-[-1.92px]">
                        <>
                          Learning and
                          <br />
                          teaching online,
                          <br />
                          made easy.
                        </>
                      </Heading>
                      <Heading
                        as="h3"
                        className="w-[84%] md:w-full !text-gray-700 tracking-[-0.64px] !font-semibold !leading-[140%]"
                      >
                        <>
                          Gain subject certification or earn money
                          <br />
                          while teaching online with GlobalTalk.
                        </>
                      </Heading>
                    </div>
                  </div>
                  <div className="flex items-center gap-[21px]">
                    <Heading size="s" as="h4" className="self-end !text-black-900 tracking-[-0.56px] !font-bold">
                      Sign In →
                    </Heading>
                    <Button size="xl" className="tracking-[-0.56px] font-bold min-w-[127px] rounded-[12px]">
                      Learn more →
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center w-[84%] md:w-full gap-5">
                  <div className="flex flex-col">
                    <div className="flex justify-center items-center gap-2">
                      <Img src="images/img_vector_cyan_800.svg" alt="vectorone_one" className="h-[24px]" />
                      <Heading size="3xl" as="h5" className="!text-black-900 tracking-[-1.44px]">
                        <span className="text-black-900 font-bold">700</span>
                        <span className="text-cyan-800 font-bold">+</span>
                      </Heading>
                    </div>
                    <Heading size="s" as="h6" className="mt-[-1px] !text-gray-700 tracking-[-0.56px]">
                      Hours of Content
                    </Heading>
                  </div>
                  <div className="self-end h-[40px] w-px bg-gray-300" />
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2">
                      <Img src="images/img_vector_cyan_800.svg" alt="vectorthree_one" className="h-[24px]" />
                      <Heading size="3xl" as="h1" className="!text-black-900 tracking-[-1.44px]">
                        <span className="text-black-900 font-bold">575k</span>
                        <span className="text-cyan-800 font-bold">+</span>
                      </Heading>
                    </div>
                    <Heading size="s" as="p" className="mt-[-1px] !text-gray-700 tracking-[-0.56px]">
                      Active Users
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="md:p-5 flex-1">
                <div className="h-[416px] relative">
                  <Img
                    src="images/img_casual_life_3d.png"
                    alt="casuallife3d"
                    className="justify-center h-[416px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_casual_life_3d_130x212.png"
                    alt="casuallife3d"
                    className="h-[130px] w-[43%] bottom-[29%] right-0 m-auto object-cover absolute"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
