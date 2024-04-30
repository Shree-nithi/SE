import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img } from "../../components";
import ClassbookTwoRowfour from "../../components/ClassbookTwoRowfour";
import ClassbookTwoRowvectorone from "../../components/ClassbookTwoRowvectorone";
import ClassbookTwoRowvectorthree from "../../components/ClassbookTwoRowvectorthree";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function ClassbookSixPage() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <Header className="p-6 sm:p-5 bg-gray-100 shadow-bs" />
        <div>
          <div className="flex flex-col items-center gap-[38px] p-10 sm:p-5 bg-gray-100">
            <div className="flex flex-col items-center w-full gap-[35px] mx-auto max-w-[1180px]">
              <div className="flex md:flex-col self-stretch justify-between items-center gap-5 p-[19px] bg-white-A700 rounded-[14px]">
                <ClassbookTwoRowvectorone
                  fluenthatgrad="images/img_fluent_hat_grad_gray_300.svg"
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
            <div className="flex md:flex-col justify-center items-center w-[43%] md:w-full mb-[60px] gap-[30px] p-10 sm:p-5 bg-white-A700 shadow-sm rounded-[14px]">
              <Img src="images/img_image_54_3.png" alt="imagefiftyfour" className="w-[200px] object-cover" />
              <div className="flex flex-col items-start gap-[39px] flex-1">
                <div className="flex flex-col self-stretch">
                  <Text as="p" className="tracking-[-1.28px]">
                    No words in this section yet
                  </Text>
                  <Heading as="h1" className="tracking-[-0.64px] !font-semibold !leading-[140%]">
                    To save difficult words for further study, go to the textbook and select &#39;add to dictionary&#39;
                  </Heading>
                </div>
                <Button
                  color="cyan_800"
                  size="4xl"
                  className="sm:px-5 tracking-[-0.64px] font-bold min-w-[140px] rounded-[22px]"
                >
                  To Textbook
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
