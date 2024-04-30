import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Button, Img } from "../../components";
import ClassbookOneRow from "../../components/ClassbookOneRow";
import ClassbookTwoRowfour from "../../components/ClassbookTwoRowfour";
import ClassbookTwoRowvectorone from "../../components/ClassbookTwoRowvectorone";
import ClassbookTwoRowvectorthree from "../../components/ClassbookTwoRowvectorthree";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";

export default function ClassbookThreePage() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <Header className="p-6 sm:p-5 bg-gray-100 shadow-bs" />
        <div>
          <div className="flex flex-col items-center gap-[39px] p-10 sm:p-5 bg-gray-100">
            <div className="flex flex-col items-center w-full gap-[35px] mx-auto max-w-[1180px]">
              <div className="flex sm:flex-col self-stretch justify-between items-center gap-5 p-5 bg-white-A700 rounded-[14px]">
                <ClassbookTwoRowvectorone className="flex sm:flex-col justify-center items-center w-[16%] sm:w-full" />
                <ClassbookTwoRowfour className="flex sm:flex-col justify-center items-center gap-2.5" />
              </div>
              <ClassbookTwoRowvectorthree className="flex md:flex-col justify-center items-start w-[70%] md:w-full gap-10" />
            </div>
            <div className="flex flex-col w-[50%] md:w-full gap-10">
              <div className="flex md:flex-col md:p-5 bg-white-A700 shadow-sm flex-1 rounded-[14px]">
                <ClassbookOneRow className="flex items-center w-[36%] md:w-full" />
                <div className="flex flex-col w-[60%] md:w-full pl-[34px] gap-5 py-[34px] sm:pl-5 sm:py-5">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center gap-5">
                      <div className="flex justify-center gap-3">
                        <Text as="p" className="self-start tracking-[-1.28px]">
                          remark
                        </Text>
                        <Text as="p" className="tracking-[-1.28px]">
                          /
                        </Text>
                        <Text as="p" className="!text-gray-600 tracking-[-1.28px]">
                          note
                        </Text>
                      </div>
                      <Button color="gray_100" size="2xl" shape="round" className="self-end w-[40px] !rounded">
                        <Img src="images/img_frame_21.svg" />
                      </Button>
                    </div>
                    <div className="flex justify-center w-[17%] md:w-full pr-px py-px">
                      <Heading size="lg" as="h1" className="self-end mt-0.5 !text-black-900 tracking-[0.72px]">
                        [rimɑ́ːrk]
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col mb-[5px] pt-[3px] gap-6">
                    <Text size="xs" as="p" className="tracking-[-0.64px]">
                      To remark is to say something. - Remarquer, c&#39;est dire quelque chose
                    </Text>
                    <div>
                      <Text size="xs" as="p" className="!text-gray-600 tracking-[-0.64px] !leading-[150%]">
                        The teacher remarked on how quickly the students were learning. L&#39;enseignant a noté la
                        rapidité avec laquelle les élèves apprenaient.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[516px] h-px bg-gray-300" />
              <div className="flex md:flex-col md:p-5 bg-white-A700 shadow-sm flex-1 rounded-[14px]">
                <ClassbookOneRow className="flex items-center w-[36%] md:w-full" />
                <div className="flex flex-col w-[60%] md:w-full pl-[33px] gap-5 py-[33px] sm:pl-5 sm:py-5">
                  <div className="flex flex-col gap-[9px]">
                    <div className="flex justify-between items-center gap-5">
                      <div className="flex justify-center gap-3">
                        <Text as="p" className="tracking-[-1.28px]">
                          awful
                        </Text>
                        <Text as="p" className="tracking-[-1.28px]">
                          /
                        </Text>
                        <Text as="p" className="self-start !text-gray-600 tracking-[-1.28px]">
                          terrible
                        </Text>
                      </div>
                      <Button color="gray_100" size="2xl" shape="round" className="self-end w-[40px] !rounded">
                        <Img src="images/img_frame_21.svg" />
                      </Button>
                    </div>
                    <div className="flex justify-center w-[11%] md:w-full pt-px pr-px">
                      <Heading size="lg" as="h2" className="self-end !text-black-900 tracking-[0.72px]">
                        [ɔ́ːfəl]
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col mb-1.5 pt-[3px] gap-6">
                    <Text size="xs" as="p" className="tracking-[-0.64px]">
                      To remark is to say something. - Remarquer, c&#39;est dire quelque chose
                    </Text>
                    <div>
                      <Text size="xs" as="p" className="!text-gray-600 tracking-[-0.64px] !leading-[150%]">
                        The teacher remarked on how quickly the students were learning. L&#39;enseignant a noté la
                        rapidité avec laquelle les élèves apprenaient.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[516px] h-px bg-gray-300" />
              <div className="flex md:flex-col md:p-5 bg-white-A700 shadow-sm flex-1 rounded-[14px]">
                <ClassbookOneRow className="flex items-center w-[36%] md:w-full" />
                <div className="flex flex-col w-[60%] md:w-full pl-[34px] gap-5 py-[34px] sm:pl-5 sm:py-5">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center gap-5">
                      <div className="flex justify-center gap-3">
                        <Text as="p" className="self-start tracking-[-1.28px]">
                          remark
                        </Text>
                        <Text as="p" className="tracking-[-1.28px]">
                          /
                        </Text>
                        <Text as="p" className="!text-gray-600 tracking-[-1.28px]">
                          note
                        </Text>
                      </div>
                      <Button color="gray_100" size="2xl" shape="round" className="self-end w-[40px] !rounded">
                        <Img src="images/img_frame_21.svg" />
                      </Button>
                    </div>
                    <div className="flex justify-center w-[17%] md:w-full pr-px py-px">
                      <Heading size="lg" as="h3" className="self-end mt-0.5 !text-black-900 tracking-[0.72px]">
                        [rimɑ́ːrk]
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col mb-[5px] pt-[3px] gap-6">
                    <Text size="xs" as="p" className="tracking-[-0.64px]">
                      To remark is to say something. - Remarquer, c&#39;est dire quelque chose
                    </Text>
                    <div>
                      <Text size="xs" as="p" className="!text-gray-600 tracking-[-0.64px] !leading-[150%]">
                        The teacher remarked on how quickly the students were learning. L&#39;enseignant a noté la
                        rapidité avec laquelle les élèves apprenaient.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-start mb-14 gap-6 sm:flex-wrap">
              <a
                href="#"
                className="flex justify-center items-center h-[44px] mb-[3px] border-blue_gray-400 border-[3px] border-solid rounded-[50%]"
              >
                <Heading as="h4" className="!text-blue_gray-400 tracking-[-0.64px] text-center">
                  ←
                </Heading>
              </a>
              <a
                href="#"
                className="h-[44px] px-[19px] py-3 border-blue_gray-400 border-[3px] border-solid rounded-[22px]"
              >
                <Heading as="h5" className="!text-blue_gray-400 tracking-[-0.64px]">
                  1
                </Heading>
              </a>
              <a
                href="#"
                className="flex justify-center items-center h-[44px] w-[44px] border-cyan-800 border-[3px] border-solid bg-cyan-800 rounded-[50%]"
              >
                <Heading as="h6" className="!text-gray-100 tracking-[-0.64px] text-center">
                  2
                </Heading>
              </a>
              <a
                href="#"
                className="flex justify-center items-center h-[44px] border-blue_gray-400 border-[3px] border-solid rounded-[50%]"
              >
                <Heading as="h6" className="!text-blue_gray-400 tracking-[-0.64px] text-center">
                  3
                </Heading>
              </a>
              <Heading size="lg" as="h6" className="mt-[25px] tracking-[0.72px]">
                ...
              </Heading>
              <a href="#" className="h-[44px] p-3 border-blue_gray-400 border-[3px] border-solid rounded-[22px]">
                <Heading as="h6" className="!text-blue_gray-400 tracking-[-0.64px]">
                  27
                </Heading>
              </a>
              <a href="#" className="p-3 border-blue_gray-400 border-[3px] border-solid rounded-[22px]">
                <Heading as="h6" className="!text-blue_gray-400 tracking-[-0.64px]">
                  28
                </Heading>
              </a>
              <a href="#" className="h-[44px] p-3 border-blue_gray-400 border-[3px] border-solid rounded-[22px]">
                <Heading as="h6" className="!text-blue_gray-400 tracking-[-0.64px]">
                  29
                </Heading>
              </a>
              <a
                href="#"
                className="flex justify-center items-center h-[44px] border-blue_gray-400 border-[3px] border-solid rounded-[50%]"
              >
                <Heading as="h6" className="!text-blue_gray-400 tracking-[-0.64px] text-center">
                  →
                </Heading>
              </a>
            </div>
          </div>
        </div>
        <Footer1 className="gap-[17px] p-[37px] sm:p-5 bg-gray-100" />
      </div>
    </>
  );
}
