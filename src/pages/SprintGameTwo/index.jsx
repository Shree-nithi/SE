import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function SprintGameTwoPage() {
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
            <div className="flex flex-col w-[28%] md:w-full gap-10">
              <div className="border-blue_gray-100 border-8 border-solid rounded-[50%]">
                <div className="w-full mt-[31px] mx-auto md:p-5 max-w-[491px]">
                  <div className="h-[460px] relative">
                    <Img
                      src="images/img_ellipse_1.svg"
                      alt="image_one"
                      className="justify-center h-[460px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    <div className="flex flex-col items-center w-[52%] top-[9%] right-0 left-0 m-auto absolute">
                      <div className="flex self-stretch justify-between items-center gap-5">
                        <div className="flex justify-center w-[33%]">
                          <div className="flex flex-col items-center">
                            <Text size="xl" as="p" className="tracking-[-0.80px]">
                              x2
                            </Text>
                            <a href="#" className="mt-[-5px]">
                              <Heading as="h1" className="tracking-[0.32px] !font-semibold">
                                multiplier
                              </Heading>
                            </a>
                          </div>
                        </div>
                        <div className="self-end h-[48px] w-px bg-gray-300" />
                        <div className="flex flex-col items-center">
                          <Text size="xl" as="p" className="tracking-[-0.80px]">
                            30
                          </Text>
                          <Heading as="h2" className="tracking-[0.32px] !font-semibold">
                            points
                          </Heading>
                        </div>
                      </div>
                      <div className="flex justify-center mt-[35px] gap-2.5">
                        <Img src="images/img_.svg" alt="imageone_one" className="h-[38px]" />
                        <Img src="images/img__blue_gray_100.svg" alt="imagetwo_one" className="h-[38px]" />
                        <Img src="images/img__blue_gray_100.svg" alt="imagethree_one" className="h-[38px]" />
                      </div>
                      <Text size="3xl" as="p" className="mt-[-1px] tracking-[-1.92px]">
                        negative
                      </Text>
                      <Text size="3xl" as="p" className="!text-cyan-800 tracking-[-1.92px]">
                        perdre
                      </Text>
                      <div className="flex justify-center w-[78%] md:w-full mt-[21px] gap-2.5">
                        <Button size="4xl" className="w-full sm:px-5 tracking-[-0.64px] font-bold rounded-[22px]">
                          Right
                        </Button>
                        <a
                          href="#"
                          className="flex justify-center items-center h-[44px] pt-3.5 pb-[9px] px-[22px] sm:px-5 bg-red-100 rounded-[22px]"
                        >
                          <Heading as="h3" className="!text-gray-600_01 tracking-[-0.64px]">
                            Wrong
                          </Heading>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-start w-full gap-1 mx-auto md:p-5 max-w-[310px]">
                <Heading size="xs" as="h4" className="mt-[3px]">
                  *You can also use the
                </Heading>
                <Heading
                  size="s"
                  as="h5"
                  className="flex justify-center items-center h-[22px] px-2 py-0.5 bg-white-A700 text-shadow-ts rounded-[5px]"
                >
                  ← →
                </Heading>
                <Heading size="xs" as="h6" className="mt-[3px]">
                  keys on the keyboard
                </Heading>
              </div>
            </div>
          </div>
        </div>
        <Footer className="p-[37px] sm:p-5 bg-gray-100" />
      </div>
    </>
  );
}
