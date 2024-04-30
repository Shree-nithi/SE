import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SprintGameFourColumniknow from "../../components/SprintGameFourColumniknow";

export default function AudiocallGameSixPage() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <Header className="p-6 sm:p-5 bg-gray-100 shadow-bs" />
        <div>
          <div className="flex md:flex-col justify-center gap-2.5 px-14 py-[100px] md:p-5 bg-gray-100">
            <div className="flex flex-col items-center w-[46%] md:w-full gap-[30px] p-10 md:p-5 bg-white-A700 shadow-sm rounded-[14px]">
              <div className="flex sm:flex-col self-stretch justify-center items-center mt-[13px]">
                <Img
                  src="images/img_image_33.png"
                  alt="imagethirtythre"
                  className="w-[50%] sm:w-full sm:h-auto object-cover"
                />
                <div className="flex flex-col w-[50%] sm:w-full gap-[19px]">
                  <div className="flex flex-col self-start items-start gap-1.5">
                    <Text as="p" className="tracking-[-1.28px]">
                      Your Audio-Call
                    </Text>
                    <a href="#">
                      <Heading as="h1" className="tracking-[-0.64px] !font-semibold">
                        You did pretty good!
                      </Heading>
                    </a>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center justify-center w-full p-[15px] border-gray-600_01 border-[5px] border-solid rounded-[50%]">
                      <div className="flex flex-col items-center">
                        <Heading size="s" as="h2" className="!text-black-900 tracking-[-0.56px]">
                          remains
                        </Heading>
                        <Text as="p" className="mt-[-3px] tracking-[-1.28px]">
                          ♥4
                        </Text>
                      </div>
                      <Heading as="h3" className="mb-0.5 tracking-[0.32px] !font-semibold">
                        lives
                      </Heading>
                    </div>
                    <div className="w-full">
                      <div className="flex flex-col items-center justify-center p-[15px] border-green-400 border-[5px] border-solid rounded-[50%]">
                        <div className="flex flex-col items-center">
                          <div className="flex flex-col items-center">
                            <Heading size="s" as="h4" className="!text-black-900 tracking-[-0.56px]">
                              20/
                            </Heading>
                            <Text as="p" className="h-[47px] mt-[-3px] tracking-[-1.28px]">
                              10
                            </Text>
                          </div>
                          <a href="#" className="mt-[-4px]">
                            <Heading as="h5" className="tracking-[0.32px] !font-semibold">
                              words
                            </Heading>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-5 gap-5">
                <div className="flex justify-center gap-2">
                  <Img src="images/img_frame_35249.svg" alt="image_one" className="self-start h-[20px] w-[20px]" />
                  <a href="#" className="self-end">
                    <Heading as="h6" className="!text-black-900 tracking-[-0.64px]">
                      Play it again
                    </Heading>
                  </a>
                </div>
                <Button size="4xl" className="sm:px-5 tracking-[-0.64px] font-bold min-w-[161px] rounded-[22px]">
                  Go to textbook
                </Button>
              </div>
            </div>
            <div className="flex md:flex-row sm:flex-col w-[48%] md:w-full gap-10 p-[34px] md:p-5 bg-white-A700 shadow-sm rounded-[14px]">
              <SprintGameFourColumniknow className="flex flex-col w-[43%] sm:w-full mb-[5px] ml-[5px] gap-[22px] sm:mb-0 sm:ml-0" />
              <SprintGameFourColumniknow
                iknow="I don&#39;t know"
                className="flex flex-col mb-[5px] mr-[3px] gap-[22px] sm:mb-0 sm:mr-0 flex-1"
              />
            </div>
          </div>
        </div>
        <Footer className="p-[37px] sm:p-5 bg-gray-100" />
      </div>
    </>
  );
}
