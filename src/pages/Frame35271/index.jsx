import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";

export default function Frame35271Page() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <div>
          <div className="flex flex-col pl-[31px] gap-[73px] py-[31px] md:gap-[54px] sm:gap-9 sm:pl-5 sm:py-5 overflow-auto bg-gray-100 rounded-[48px]">
            <header className="w-[82%] ml-[117px] md:ml-0">
              <div className="flex md:flex-col justify-between items-center gap-5">
                <div className="flex sm:flex-col justify-center items-start w-[59%] md:w-full gap-6 md:p-5">
                  <Text size="xs" as="p" className="tracking-[-0.33px] !text-[16.39px] !font-normal">
                    GlobalTalk
                  </Text>
                  <div className="h-[14px] w-px mt-1 bg-gray-300" />
                  <a href="#">
                    <Heading size="s" as="p" className="!text-gray-700 tracking-[-0.56px]">
                      Main
                    </Heading>
                  </a>
                  <a href="#">
                    <Heading size="s" as="p" className="!text-gray-700 tracking-[-0.56px]">
                      Guide
                    </Heading>
                  </a>
                  <a href="#">
                    <Heading size="s" as="p" className="!text-gray-700 tracking-[-0.56px]">
                      Statistics
                    </Heading>
                  </a>
                  <div className="flex justify-center items-center">
                    <Heading size="s" as="p" className="!text-gray-700 tracking-[-0.56px]">
                      Games
                    </Heading>
                    <Img src="images/img_frame_8.svg" alt="image_one" className="h-[12px] w-[12px]" />
                  </div>
                  <a href="#">
                    <Heading size="s" as="p" className="!text-gray-700 tracking-[-0.56px]">
                      About
                    </Heading>
                  </a>
                </div>
                <div className="flex justify-center items-center gap-[21px] md:p-5">
                  <a href="#" className="self-end">
                    <Heading size="s" as="p" className="!text-black-900 tracking-[-0.56px] !font-bold">
                      Login →
                    </Heading>
                  </a>
                  <Button
                    color="cyan_800"
                    size="xl"
                    className="tracking-[-0.56px] font-bold min-w-[90px] rounded-[12px]"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </header>
            <div className="flex md:flex-col justify-end items-center mb-[5px] ml-[117px] gap-[11px] md:ml-0">
              <div className="flex flex-col w-[39%] md:w-full gap-[38px] md:p-5">
                <div className="flex flex-col gap-[29px]">
                  <div className="flex flex-col gap-[17px]">
                    <Heading size="s" as="h1" className="!text-cyan-800 tracking-[1.96px] uppercase !font-bold">
                      E-COURSE PLATFORM
                    </Heading>
                    <div className="flex flex-col gap-[30px]">
                      <Text size="2xl" as="p" className="tracking-[-1.76px]">
                        <>
                          Learning
                          <br />
                          english online,
                          <br />
                          made easy.
                        </>
                      </Text>
                      <Heading
                        as="h2"
                        className="w-[84%] md:w-full !text-gray-700 tracking-[-0.64px] !font-semibold !leading-[140%]"
                      >
                        Practice your English and learn new things with the our platform
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
                <div className="flex justify-between items-center w-[73%] md:w-full gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex justify-center items-start gap-2">
                      <Img src="images/img_vector_cyan_800.svg" alt="vectorone_one" className="h-[24px] mt-[5px]" />
                      <Heading size="2xl" as="h4" className="!text-black-900 tracking-[-1.28px]">
                        <span className="text-black-900 font-delagothicone font-normal">600</span>
                        <span className="text-cyan-800 font-delagothicone font-normal">+</span>
                      </Heading>
                    </div>
                    <Heading size="s" as="h5" className="mt-[-2px] !text-gray-700 tracking-[-0.56px]">
                      Popular Words
                    </Heading>
                  </div>
                  <div className="h-[40px] w-px bg-gray-300" />
                  <div className="flex flex-col">
                    <div className="flex justify-center items-start gap-[7px]">
                      <Img src="images/img_frame_35271.svg" alt="imageone_one" className="h-[24px] mt-[5px]" />
                      <Heading size="2xl" as="h6" className="!text-black-900 tracking-[-1.28px]">
                        <span className="text-black-900 font-delagothicone font-normal">2</span>
                        <span className="text-cyan-800 font-delagothicone font-normal">+</span>
                      </Heading>
                    </div>
                    <Heading size="s" as="p" className="mt-[-3px] !text-gray-700 tracking-[-0.56px]">
                      Mini-Game
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
