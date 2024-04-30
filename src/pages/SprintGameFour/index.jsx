import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function SprintGameFourPage() {
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
            <div className="flex flex-col items-center justify-center w-[45%] md:w-full gap-[30px] p-10 md:p-5 bg-white-A700 shadow-sm rounded-[14px]">
              <div className="flex sm:flex-col self-stretch justify-center items-center mt-4">
                <Img
                  src="images/img_image_33.png"
                  alt="imagethirtythre"
                  className="w-[52%] sm:w-full sm:h-auto object-cover"
                />
                <div className="flex flex-col w-[48%] sm:w-full gap-[19px]">
                  <div className="flex flex-col items-start gap-0.5">
                    <Text as="p" className="tracking-[-1.28px]">
                      Your Score
                    </Text>
                    <a href="#">
                      <Heading as="h1" className="tracking-[-0.64px] !font-semibold">
                        You did pretty good!
                      </Heading>
                    </a>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-full">
                      <div className="border-blue_gray-100 border-[5px] border-solid rounded-[50%]">
                        <div className="h-[114px] w-[114px] relative">
                          <Img
                            src="images/img_ellipse_3.svg"
                            alt="image_one"
                            className="justify-center h-[114px] w-full md:w-[114px] md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <div className="flex flex-col items-center justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <div className="flex flex-col items-center">
                              <Heading size="s" as="h2" className="!text-black-900 tracking-[-0.56px]">
                                retrieved
                              </Heading>
                              <Text as="p" className="mt-[-3px] tracking-[-1.28px]">
                                240
                              </Text>
                            </div>
                            <Heading as="h3" className="tracking-[0.32px] !font-semibold">
                              points
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full p-3.5 border-green-400 border-[5px] border-solid rounded-[50%]">
                      <div className="flex flex-col items-center">
                        <Heading size="s" as="h4" className="!text-black-900 tracking-[-0.56px]">
                          40/
                        </Heading>
                        <Text as="p" className="mt-[-3px] tracking-[-1.28px]">
                          30
                        </Text>
                      </div>
                      <Heading as="h5" className="mb-1 tracking-[0.32px] !font-semibold">
                        Solved
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-5 gap-5">
                <div className="flex justify-center gap-2">
                  <Img src="images/img_frame_35249.svg" alt="imageone_one" className="self-start h-[20px] w-[20px]" />
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

          </div>
        </div>
        <Footer className="p-[37px] sm:p-5 bg-gray-100" />
      </div>
    </>
  );
}
