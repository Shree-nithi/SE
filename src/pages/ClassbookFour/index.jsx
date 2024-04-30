import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Text, Img } from "../../components";
import ClassbookOneRow from "../../components/ClassbookOneRow";
import ClassbookTwoRowfour from "../../components/ClassbookTwoRowfour";
import ClassbookTwoRowvectorone from "../../components/ClassbookTwoRowvectorone";
import ClassbookTwoRowvectorthree from "../../components/ClassbookTwoRowvectorthree";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";

export default function ClassbookFourPage() {
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
              <div className="flex md:flex-col self-stretch justify-between items-center gap-5 p-[19px] bg-white-A700 rounded-[14px]">
                <ClassbookTwoRowvectorone
                  fluenthatgrad="images/img_fluent_hat_grad.svg"
                  ionbookoneOne="images/img_ion_book.svg"
                  dictionary="Dictionary"
                  className="flex sm:flex-col self-end justify-center items-start w-[36%] md:w-full gap-5"
                />
                <ClassbookTwoRowfour className="flex sm:flex-col justify-center items-center gap-2.5" />
              </div>
              <ClassbookTwoRowvectorthree className="flex md:flex-col justify-center items-start w-[70%] md:w-full gap-10" />
            </div>
            <div className="flex flex-col w-[50%] md:w-full gap-10">
              <div className="flex md:flex-col md:p-5 bg-white-A700 shadow-sm flex-1 rounded-[14px]">
                <ClassbookOneRow className="flex items-center w-[36%] md:w-full" />
                <div className="flex flex-col w-[60%] md:w-full pl-[34px] gap-5 py-[34px] sm:pl-5 sm:py-5">
                  <div className="flex flex-col ml-[5px] gap-2 md:ml-0">
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
                    <div className="flex items-center w-[34%] md:w-full gap-[11px]">
                      <Heading size="lg" as="h1" className="self-end !text-black-900 tracking-[0.72px]">
                        [rimɑ́ːrk]
                      </Heading>
                      <Button
                        color="green_400"
                        size="md"
                        shape="round"
                        className="w-full tracking-[-0.56px] font-semibold !rounded"
                      >
                        learned
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col ml-[5px] pt-[3px] gap-6 md:ml-0">
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
                  <div className="flex mb-[5px] ml-[5px] gap-5 md:ml-0">
                    <Button
                      color="green_400_4c"
                      size="3xl"
                      className="tracking-[-0.64px] font-bold min-w-[210px] rounded-[20px]"
                    >
                      Remove from learned
                    </Button>
                    <Button
                      color="red_400"
                      size="3xl"
                      className="tracking-[-0.64px] font-bold min-w-[176px] rounded-[20px]"
                    >
                      Add to dictionary
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-[516px] h-px bg-gray-300" />
              <div className="flex md:flex-col md:p-5 bg-white-A700 shadow-sm flex-1 rounded-[14px]">
                <ClassbookOneRow className="flex items-center w-[36%] md:w-full" />
                <div className="flex flex-col w-[60%] md:w-full pl-[33px] gap-5 py-[33px] sm:pl-5 sm:py-5">
                  <div className="flex flex-col ml-1.5 gap-[9px] md:ml-0">
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
                    <div className="flex items-center gap-[11px]">
                      <Heading size="lg" as="h2" className="self-end !text-black-900 tracking-[0.72px]">
                        [ɔ́ːfəl]
                      </Heading>
                      <Button
                        color="green_400"
                        size="md"
                        shape="round"
                        className="tracking-[-0.56px] font-semibold min-w-[76px] !rounded"
                      >
                        learned
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col ml-1.5 pt-[3px] gap-6 md:ml-0">
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
                  <div className="flex mb-1.5 ml-1.5 gap-5 md:ml-0">
                    <Button
                      color="green_400_4c"
                      size="3xl"
                      className="tracking-[-0.64px] font-bold min-w-[210px] rounded-[20px]"
                    >
                      Remove from learned
                    </Button>
                    <Button
                      color="red_400"
                      size="3xl"
                      className="tracking-[-0.64px] font-bold min-w-[176px] rounded-[20px]"
                    >
                      Add to dictionary
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-[516px] h-px bg-gray-300" />
              <div className="flex md:flex-col md:p-5 bg-white-A700 shadow-sm flex-1 rounded-[14px]">
                <ClassbookOneRow className="flex items-center w-[36%] md:w-full" />
                <div className="flex flex-col w-[60%] md:w-full pl-[34px] gap-5 py-[34px] sm:pl-5 sm:py-5">
                  <div className="flex flex-col ml-[5px] gap-2 md:ml-0">
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
                    <div className="flex items-center w-[34%] md:w-full gap-[11px]">
                      <Heading size="lg" as="h3" className="self-end !text-black-900 tracking-[0.72px]">
                        [rimɑ́ːrk]
                      </Heading>
                      <Button
                        color="green_400"
                        size="md"
                        shape="round"
                        className="w-full tracking-[-0.56px] font-semibold !rounded"
                      >
                        learned
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col ml-[5px] pt-[3px] gap-6 md:ml-0">
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
                  <div className="flex mb-[5px] ml-[5px] gap-5 md:ml-0">
                    <Button
                      color="green_400_4c"
                      size="3xl"
                      className="tracking-[-0.64px] font-bold min-w-[210px] rounded-[20px]"
                    >
                      Remove from learned
                    </Button>
                    <Button
                      color="red_400"
                      size="3xl"
                      className="tracking-[-0.64px] font-bold min-w-[176px] rounded-[20px]"
                    >
                      Add to dictionary
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col justify-center items-start mb-14 gap-6">
              <Heading
                as="h4"
                className="flex justify-center items-center h-[44px] mb-[3px] !text-blue_gray-400 tracking-[-0.64px] border-blue_gray-400 border-[3px] border-solid text-center rounded-[50%]"
              >
                ←
              </Heading>
              <Button
                color="blue_gray_400"
                size="4xl"
                variant="outline"
                className="tracking-[-0.64px] font-bold min-w-[45px] rounded-[22px]"
              >
                1
              </Button>
              <Heading
                as="h5"
                className="flex justify-center items-center h-[44px] w-[44px] !text-gray-100 tracking-[-0.64px] border-cyan-800 border-[3px] border-solid bg-cyan-800 text-center rounded-[50%]"
              >
                2
              </Heading>
              <Heading
                as="h6"
                className="flex justify-center items-center h-[44px] !text-blue_gray-400 tracking-[-0.64px] border-blue_gray-400 border-[3px] border-solid text-center rounded-[50%]"
              >
                3
              </Heading>
              <Heading size="lg" as="h6" className="mt-[25px] tracking-[0.72px]">
                ...
              </Heading>
              <Button
                color="blue_gray_400"
                size="4xl"
                variant="outline"
                className="tracking-[-0.64px] font-bold min-w-[45px] rounded-[22px]"
              >
                27
              </Button>
              <Button
                color="blue_gray_400"
                size="4xl"
                variant="outline"
                className="tracking-[-0.64px] font-bold min-w-[46px] rounded-[22px]"
              >
                28
              </Button>
              <Button
                color="blue_gray_400"
                size="4xl"
                variant="outline"
                className="tracking-[-0.64px] font-bold min-w-[45px] rounded-[22px]"
              >
                29
              </Button>
              <Heading
                as="h6"
                className="flex justify-center items-center h-[44px] !text-blue_gray-400 tracking-[-0.64px] border-blue_gray-400 border-[3px] border-solid text-center rounded-[50%]"
              >
                →
              </Heading>
            </div>
          </div>
        </div>
        <Footer1 className="gap-[17px] p-[37px] sm:p-5 bg-gray-100" />
      </div>
    </>
  );
}
