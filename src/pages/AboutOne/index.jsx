import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function AboutOnePage() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <Header className="p-6 sm:p-5 bg-gray-100 shadow-bs" />
        <div>
          <div className="flex flex-col gap-10 p-[100px] md:p-5 bg-gray-100">
            <div className="flex md:flex-col justify-end items-center gap-[30px] py-10 mx-auto md:p-5 sm:py-5 bg-white-A700 shadow-sm flex-1 rounded-[14px]">
              <Img src="images/img_image_54.png" alt="alex_one" className="w-[200px] object-cover" />
              <div className="flex justify-end w-[73%] md:w-full">
                <div className="flex flex-col items-start w-full gap-1">
                  <div className="flex items-start gap-3.5">
                    <Text as="p" className="tracking-[-1.28px]">
                      Shree
                    </Text>
                    <Button
                      color="cyan_800"
                      shape="round"
                      className="mt-[5px] tracking-[-0.48px] font-semibold min-w-[56px]"
                    >
                      github
                    </Button>
                  </div>
                  <Heading as="h1" className="w-[87%] md:w-full tracking-[-0.64px] !font-semibold !leading-[140%]">
                    Made design, api queries, statistics, sprint game, did some layout and supervised development.
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col justify-end items-center gap-[30px] py-10 mx-auto md:p-5 sm:py-5 bg-white-A700 shadow-sm flex-1 rounded-[14px]">
              <Img src="images/img_image_54_200x200.png" alt="imagefiftyfour" className="w-[200px] object-cover" />
              <div className="flex justify-end w-[73%] md:w-full">
                <div className="flex flex-col items-start w-full gap-[5px]">
                  <div className="flex items-start gap-3.5">
                    <Text as="p" className="tracking-[-1.28px]">
                      Gabriel
                    </Text>
                    <Button
                      color="cyan_800"
                      shape="round"
                      className="mt-1.5 tracking-[-0.48px] font-semibold min-w-[56px]"
                    >
                      github
                    </Button>
                  </div>
                  <Heading as="h2" className="w-[87%] md:w-full tracking-[-0.64px] !font-semibold !leading-[140%]">
                    Authorization / registration module, Audio Challenge game, collection of statistics, routing, typing
                    of the studied words.
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col justify-end items-center gap-[30px] py-10 mx-auto md:p-5 sm:py-5 bg-white-A700 shadow-sm flex-1 rounded-[14px]">
              <Img src="images/img_image_54_1.png" alt="imagefiftyfour" className="w-[200px] object-cover" />
              <div className="flex justify-end w-[73%] md:w-full">
                <div className="flex flex-col items-start w-full gap-[3px]">
                  <div className="flex items-start gap-3.5">
                    <Text as="p" className="tracking-[-1.28px]">
                      Marcus
                    </Text>
                    <Button
                      color="cyan_800"
                      shape="round"
                      className="mt-1 tracking-[-0.48px] font-semibold min-w-[56px]"
                    >
                      github
                    </Button>
                  </div>
                  <Heading as="h3" className="w-[87%] md:w-full tracking-[-0.64px] !font-semibold !leading-[140%]">
                    Made the application home page, e-textbook, layout, and adaptive.
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="p-[37px] sm:p-5 bg-gray-100" />
      </div>
    </>
  );
}
