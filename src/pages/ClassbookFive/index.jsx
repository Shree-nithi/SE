import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text } from "../../components";
import ClassbookFiveColumn from "../../components/ClassbookFiveColumn";
import ClassbookTwoRowfour from "../../components/ClassbookTwoRowfour";
import ClassbookTwoRowvectorone from "../../components/ClassbookTwoRowvectorone";
import ClassbookTwoRowvectorthree from "../../components/ClassbookTwoRowvectorthree";
import Footer from "../../components/Footer";
import Header3 from "../../components/Header3";

export default function ClassbookFivePage() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <Header3 className="p-6 sm:p-5 bg-gray-100 shadow-bs" />
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
                <ClassbookTwoRowfour
                  imagetenoneOne="images/img_image_10_44x44.png"
                  sprint="Sprint"
                  imageelevenone="images/img_image_11_44x44.png"
                  audiocall="Audio-Call"
                  className="flex sm:flex-col justify-center items-center w-[34%] md:w-full gap-2.5"
                />
              </div>
              <ClassbookTwoRowvectorthree className="flex md:flex-col justify-center items-start w-[70%] md:w-full gap-10" />
            </div>
            <div className="justify-center w-full gap-5 grid-cols-3 mx-auto md:grid-cols-[1fr] grid max-w-[1180px]">
              <ClassbookFiveColumn className="flex flex-col w-full bg-white-A700 shadow-sm cursor-pointer rounded-[14px] hover:shadow-sm" />
              <ClassbookFiveColumn
                imagefiftyfive="images/img_image_55_336x337.png"
                className="flex flex-col w-full bg-white-A700 shadow-sm cursor-pointer rounded-[14px] hover:shadow-sm"
              />
              <ClassbookFiveColumn className="flex flex-col w-full bg-white-A700 shadow-sm cursor-pointer rounded-[14px] hover:shadow-sm" />
              <ClassbookFiveColumn className="flex flex-col w-full bg-white-A700 shadow-sm cursor-pointer rounded-[14px] hover:shadow-sm" />
              <ClassbookFiveColumn
                imagefiftyfive="images/img_image_55_336x337.png"
                className="flex flex-col w-full bg-white-A700 shadow-sm cursor-pointer rounded-[14px] hover:shadow-sm"
              />
              <ClassbookFiveColumn className="flex flex-col w-full bg-white-A700 shadow-sm cursor-pointer rounded-[14px] hover:shadow-sm" />
              <ClassbookFiveColumn className="flex flex-col w-full bg-white-A700 shadow-sm cursor-pointer rounded-[14px] hover:shadow-sm" />
              <ClassbookFiveColumn
                imagefiftyfive="images/img_image_55_336x337.png"
                className="flex flex-col w-full bg-white-A700 shadow-sm cursor-pointer rounded-[14px] hover:shadow-sm"
              />
              <a href="#" className="w-full cursor-pointer hover:shadow-sm">
                <Text />
              </a>
            </div>
            <div className="flex justify-center items-start mb-14 gap-6 sm:flex-wrap">
              <a
                href="#"
                className="flex justify-center items-center h-[44px] mb-[3px] border-blue_gray-400 border-[3px] border-solid rounded-[50%]"
              >
                <Heading as="h1" className="!text-blue_gray-400 tracking-[-0.64px] text-center">
                  ←
                </Heading>
              </a>
              <a
                href="#"
                className="h-[44px] px-[19px] py-3 border-blue_gray-400 border-[3px] border-solid rounded-[22px]"
              >
                <Heading as="h2" className="!text-blue_gray-400 tracking-[-0.64px]">
                  1
                </Heading>
              </a>
              <a
                href="#"
                className="flex justify-center items-center h-[44px] w-[44px] border-cyan-800 border-[3px] border-solid bg-cyan-800 rounded-[50%]"
              >
                <Heading as="h3" className="!text-gray-100 tracking-[-0.64px] text-center">
                  2
                </Heading>
              </a>
              <a
                href="#"
                className="flex justify-center items-center h-[44px] border-blue_gray-400 border-[3px] border-solid rounded-[50%]"
              >
                <Heading as="h4" className="!text-blue_gray-400 tracking-[-0.64px] text-center">
                  3
                </Heading>
              </a>
              <Heading size="lg" as="h5" className="mt-[25px] !text-black-900 tracking-[0.72px]">
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
        <Footer className="p-[37px] sm:p-5 bg-gray-100" />
      </div>
    </>
  );
}
