import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import Header2 from "../../components/Header2";

export default function FrameEighteenPage() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <div>
          <div className="flex flex-col pl-[31px] gap-[73px] py-[31px] md:gap-[54px] sm:gap-9 sm:pl-5 sm:py-5 overflow-auto bg-gray-100 rounded-[48px]">
            <Header2 className="w-[82%] ml-[117px] md:ml-0" />
            <div className="flex md:flex-col justify-end items-center mb-[5px] ml-[117px] gap-[11px] md:ml-0">
              <div className="flex flex-col w-[39%] md:w-full gap-[37px] md:p-5">
                <div className="flex flex-col gap-[29px]">
                  <div className="flex flex-col gap-[17px]">
                    <Heading size="s" as="h1" className="!text-cyan-800 tracking-[1.96px] uppercase !font-bold">
                      E-COURSE PLATFORM
                    </Heading>
                    <div className="flex flex-col gap-[30px]">
                      <Text size="2xl" as="p" className="tracking-[-1.76px]">
                        <>
                          Learning and
                          <br />
                          teaching online,
                          <br />
                          made easy.
                        </>
                      </Text>
                      <Heading
                        as="h2"
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
                    <Heading size="s" as="h3" className="!text-black-900 tracking-[-0.56px] !font-bold">
                      Sign In →
                    </Heading>
                    <Button size="xl" className="tracking-[-0.56px] font-bold min-w-[127px] rounded-[12px]">
                      Learn more →
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center w-[90%] md:w-full gap-5">
                  <div className="flex flex-col items-start">
                    <div className="flex items-start gap-2">
                      <Img src="images/img_vector_cyan_800.svg" alt="vectorone_one" className="h-[24px] mt-[5px]" />
                      <Heading size="2xl" as="h4" className="!text-black-900 tracking-[-1.28px]">
                        <span className="text-black-900 font-delagothicone font-normal">700</span>
                        <span className="text-cyan-800 font-delagothicone font-normal">+</span>
                      </Heading>
                    </div>
                    <Heading size="s" as="h5" className="mt-[-3px] !text-gray-700 tracking-[-0.56px]">
                      Hours of Content
                    </Heading>
                  </div>
                  <div className="self-end h-[40px] w-px bg-gray-300" />
                  <div className="flex flex-col items-start">
                    <div className="flex items-start gap-2">
                      <Img src="images/img_vector_cyan_800.svg" alt="vectorthree_one" className="h-[24px] mt-[5px]" />
                      <Heading size="2xl" as="h6" className="!text-black-900 tracking-[-1.28px]">
                        <span className="text-black-900 font-delagothicone font-normal">575k</span>
                        <span className="text-cyan-800 font-delagothicone font-normal">+</span>
                      </Heading>
                    </div>
                    <Heading size="s" as="p" className="mt-[-3px] !text-gray-700 tracking-[-0.56px]">
                      Active Users
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="h-[471px] md:w-full flex-1 relative md:flex-none">
                <div className="flex sm:flex-col items-center w-[85%] left-[2%] top-0 m-auto absolute">
                  <Img
                    src="images/img_image_6.png"
                    alt="imagesixone_one"
                    className="self-end w-[19%] sm:w-full sm:h-auto object-cover"
                  />
                  <Img
                    src="images/img_casual_life_3d.png"
                    alt="casuallife3d"
                    className="w-[81%] sm:w-full sm:h-auto ml-[-83px] sm:ml-0 object-cover"
                  />
                </div>
                <Img
                  src="images/img_image_12_447x294.png"
                  alt="imagetwelveone"
                  className="h-[447px] w-[49%] right-0 bottom-0 top-0 my-auto object-cover absolute"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
