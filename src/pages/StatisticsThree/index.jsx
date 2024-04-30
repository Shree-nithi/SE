import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function StatisticsThreePage() {
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
            <div className="flex md:flex-col justify-center items-center w-[44%] md:w-full gap-[30px] p-10 sm:p-5 bg-white-A700 shadow-sm rounded-[14px]">
              <Img src="images/img_image_54_2.png" alt="imagefiftyfour" className="w-[200px] object-cover" />
              <div className="flex flex-col gap-[39px] flex-1">
                <div className="flex flex-col gap-3.5">
                  <Text as="p" className="tracking-[-1.28px]">
                    <>
                      Sorry, statistics
                      <br />
                      not available 🥺
                    </>
                  </Text>
                  <Heading as="h1" className="tracking-[-0.64px] !font-semibold !leading-[140%]">
                    To get statistics and keep track of your results, register or log in to your account
                  </Heading>
                </div>
                <div className="flex items-center gap-[30px]">
                  <a href="#" className="self-end">
                    <Heading as="h2" className="!text-black-900 tracking-[-0.64px]">
                      Log In →
                    </Heading>
                  </a>
                  <Button
                    color="cyan_800"
                    size="4xl"
                    className="sm:px-5 tracking-[-0.64px] font-bold min-w-[106px] rounded-[22px]"
                  >
                    Sign Up
                  </Button>
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
