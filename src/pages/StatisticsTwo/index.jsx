import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function StatisticsTwoPage() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <Header className="p-6 sm:p-5 bg-gray-100 shadow-bs" />
        <div>
          <div className="flex flex-col items-center justify-center gap-[38px] px-14 py-[94px] md:p-5 bg-gray-100">
            <div className="flex sm:flex-col justify-between items-start w-[23%] md:w-full gap-5">
              <Text size="md" as="p" className="mt-[3px] !text-gray-600 tracking-[-1.04px]">
                For the day
              </Text>
              <div className="flex flex-col w-[51%] sm:w-full gap-[7px] sm:p-5">
                <Text size="md" as="p" className="tracking-[-1.04px]">
                  For all the time
                </Text>
                <div className="h-[2px] bg-black-900" />
              </div>
            </div>
            <div className="flex md:flex-col justify-center w-full mb-[5px] gap-2.5 mx-auto max-w-[1524px]">
              <div className="flex flex-col w-[38%] md:w-full gap-[15px] p-[33px] md:p-5 bg-white-A700 shadow-sm rounded-[14px]">
                <div className="flex flex-col items-start ml-1.5 gap-1 md:ml-0">
                  <Text as="p" className="tracking-[-1.28px]">
                    All-time statistics
                  </Text>
                  <a href="#">
                    <Heading as="h1" className="tracking-[-0.64px] !font-semibold">
                      Your statistics on all activities
                    </Heading>
                  </a>
                </div>
                <div className="flex sm:flex-col justify-between items-center ml-1.5 gap-5 md:ml-0">
                  <div className="flex justify-center w-[40%] sm:w-full">
                    <div className="flex flex-col items-center w-[54%] md:w-full">
                      <div className="flex justify-center w-[73%] md:w-full">
                        <Text size="xl" as="p" className="tracking-[-0.80px]">
                          <span className="text-black-900">10</span>
                          <span className="text-cyan-800">+</span>
                        </Text>
                      </div>
                      <a href="#" className="mt-[-7px]">
                        <Heading as="h2" className="tracking-[-0.64px] !font-semibold">
                          words studied
                        </Heading>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[50%] sm:w-full gap-5">
                    <div className="self-end h-[48px] w-px bg-gray-300" />
                    <div className="flex justify-center w-[81%]">
                      <div className="flex flex-col items-center w-[61%] md:w-full">
                        <div className="flex justify-center w-[87%] md:w-full">
                          <Text size="xl" as="p" className="tracking-[-0.80px]">
                            <span className="text-black-900">43</span>
                            <span className="text-cyan-800">%</span>
                          </Text>
                        </div>
                        <a href="#" className="mt-[-6px]">
                          <Heading as="h3" className="tracking-[-0.64px] !font-semibold">
                            correct answers
                          </Heading>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mb-1.5 ml-1.5 gap-[11px] md:ml-0">
                  <div className="flex flex-col pb-[19px] flex-1">
                    <div className="flex sm:flex-col justify-center gap-5">
                      <Img
                        src="images/img_image_30.png"
                        alt="sprint_one"
                        className="w-[15%] sm:w-full sm:h-auto mt-0.5 object-cover"
                      />
                      <div className="flex flex-col items-start pb-[3px] gap-1.5 flex-1">
                        <div className="flex items-start gap-2">
                          <Text size="md" as="p" className="tracking-[-1.04px]">
                            Sprint
                          </Text>
                          <Button shape="round" className="mt-[3px] tracking-[-0.48px] font-semibold min-w-[79px]">
                            speed task
                          </Button>
                        </div>
                        <div className="flex flex-col items-start gap-[3px]">
                          <Heading size="s" as="h4" className="tracking-[-0.56px]">
                            <span className="text-black-900 tracking-[-0.64px] text-base font-bold">5</span>
                            <span className="text-black-900">words studied</span>
                          </Heading>
                          <Heading size="s" as="h5" className="tracking-[-0.56px]">
                            <span className="text-black-900 tracking-[-0.64px] text-base font-bold">90%</span>
                            <span className="text-black-900">correct answers</span>
                          </Heading>
                          <Heading size="s" as="h6" className="tracking-[-0.56px]">
                            <span className="text-black-900 tracking-[-0.64px] text-base font-bold">7</span>
                            <span className="text-black-900">best series of correct answers</span>
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[502px] h-px bg-gray-300" />
                  <div className="flex sm:flex-col justify-center gap-2.5 flex-1">
                    <div className="w-[14%] sm:w-full mt-[5px]">
                      <div>
                        <div>
                          <Img
                            src="images/img_group_14.png"
                            alt="image_one"
                            className="self-stretch md:h-auto z-[1] object-cover"
                          />
                          <Img
                            src="images/img_image_29.png"
                            alt="imagetwentynine"
                            className="h-[112px] w-full md:h-auto mt-[-36px] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[9px] flex-1">
                      <div className="flex items-center gap-2">
                        <Text size="md" as="p" className="tracking-[-1.04px]">
                          Audio-Call
                        </Text>
                        <Button shape="round" className="tracking-[-0.48px] font-semibold min-w-[92px]">
                          audition task
                        </Button>
                      </div>
                      <div className="flex flex-col items-start gap-[3px]">
                        <Heading size="s" as="p" className="tracking-[-0.56px]">
                          <span className="text-black-900 tracking-[-0.64px] text-base font-bold">5</span>
                          <span className="text-black-900">words studied</span>
                        </Heading>
                        <Heading size="s" as="p" className="tracking-[-0.56px]">
                          <span className="text-black-900 tracking-[-0.64px] text-base font-bold">90%</span>
                          <span className="text-black-900">correct answers</span>
                        </Heading>
                        <Heading size="s" as="p" className="tracking-[-0.56px]">
                          <span className="text-black-900 tracking-[-0.64px] text-base font-bold">7</span>
                          <span className="text-black-900">best series of correct answers</span>
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10 md:p-5 bg-white-A700 shadow-sm flex-1 rounded-[14px]">
                <Img
                  src="images/img_https_www_cha_421x852.png"
                  alt="httpswwwchaone"
                  className="h-[421px] w-full md:h-auto my-[5px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer className="p-[37px] sm:p-5 bg-gray-100" />
      </div>
    </>
  );
}
