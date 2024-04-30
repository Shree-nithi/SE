import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function SprintGameOnePage() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <Header className="p-6 sm:p-5 bg-gray-100 shadow-bs" />
        <div>
          <div className="flex justify-center px-14 py-[100px] md:p-5 bg-gray-100">
            <div className="flex md:flex-col justify-start items-center w-[44%] md:w-full gap-2.5 p-5 bg-white-A700 shadow-sm rounded-[14px]">
              <div className="w-[35%] md:w-full">
                <Img
                  src="images/img_image_30.png"
                  alt="imagethirty_one"
                  className="h-[200px] w-[200%] md:h-auto object-cover"
                />
              </div>
              <div className="flex flex-col items-start mr-[13px] gap-[29px] md:mr-0 flex-1">
                <div className="flex flex-col self-stretch">
                  <div className="flex items-start gap-2.5">
                    <Text size="3xl" as="p" className="tracking-[-1.92px]">
                      Quiz
                    </Text>
                    <Button
                      color="blue_gray_100_01"
                      shape="round"
                      className="mt-[15px] tracking-[-0.48px] font-semibold min-w-[79px]"
                    >
                      speed task
                    </Button>
                  </div>
                  <Heading as="h1" className="tracking-[-0.64px] !font-semibold !leading-[140%]">
                    Get started with your personal math quiz!
                  </Heading>
                </div>
                <div className="flex flex-col self-stretch gap-[9px]">
                  <Heading size="s" as="h2" className="tracking-[-0.56px]">
                    Choose a level:
                  </Heading>
                  <div className="flex justify-between pr-[69px] gap-5 md:pr-5">
                    <Heading
                      as="h3"
                      className="flex justify-center items-center h-[44px] w-[44px] !text-green-400 tracking-[-0.64px] border-green-400 border-[3px] border-solid text-center rounded-[50%]"
                    >
                      A1
                    </Heading>
                    <Heading
                      as="h4"
                      className="flex justify-center items-center h-[44px] w-[44px] !text-lime-700 tracking-[-0.64px] border-lime-700 border-[3px] border-solid text-center rounded-[50%]"
                    >
                      A2
                    </Heading>
                    <Heading
                      as="h5"
                      className="flex justify-center items-center h-[44px] w-[44px] !text-red-400 tracking-[-0.64px] border-red-400 border-[3px] border-solid bg-red-400_4c text-center rounded-[50%]"
                    >
                      B1
                    </Heading>
                    <Heading
                      as="h6"
                      className="flex justify-center items-center h-[44px] w-[44px]  !text-pink-800 tracking-[-0.64px] border-pink-800 border-[3px] border-solid text-center rounded-[50%]"
                    >
                      B2
                    </Heading>
                    <Heading
                      as="h6"
                      className="flex justify-center items-center h-[44px] w-[44px]  !text-purple-400 tracking-[-0.64px] border-purple-400 border-[3px] border-solid text-center rounded-[50%]"
                    >
                      C1
                    </Heading>
                    <Button
                      color="blue_gray_400_01"
                      size="4xl"
                      variant="outline"
                      className="flex justify-center items-center h-[44px] w-[44px] tracking-[-0.64px] border-[3px] border-solid text-center rounded-[50%]"
                    >
                      C2
                    </Button>
                  </div>
                </div>
                <Button
                  color="cyan_800_01"
                  size="4xl"
                  className="sm:px-5 tracking-[-0.64px] font-bold min-w-[132px] rounded-[22px]"
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="p-[37px] sm:p-5 bg-gray-100" />
      </div>
    </>
  );
}
