import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function AudiocallGameTwoPage() {
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
            <div className="flex flex-col items-center w-[35%] md:w-full gap-[33px]">
              <div className="flex flex-col items-center w-[32%] md:w-full gap-3.5">
                <div className="flex flex-col items-center justify-center w-full gap-[3px] p-[25px] mx-auto md:p-5 border-cyan-800 border-4 border-solid max-w-[140px] rounded-[50%]">
                  <Img src="images/img_frame_18.svg" alt="image_one" className="h-[60px] w-[60px] mt-[3px]" />
                  <Heading size="lg" as="h1" className="!text-cyan-800 tracking-[-0.72px] !font-bold">
                    Play
                  </Heading>
                </div>
                <div className="flex justify-center gap-2.5">
                  <Img src="images/img__pink_800.svg" alt="imageone_one" className="h-[47px]" />
                  <Img src="images/img__pink_800.svg" alt="imagetwo_one" className="h-[47px]" />
                  <Img src="images/img__pink_800.svg" alt="imagethree_one" className="h-[47px]" />
                  <Img src="images/img__pink_800.svg" alt="imagefour_one" className="h-[47px]" />
                  <Img src="images/img__pink_800.svg" alt="imagefive_one" className="h-[47px]" />
                </div>
              </div>
              <div className="self-stretch">
                <div className="flex md:flex-col justify-center items-center gap-5">
                  <a href="#" className="self-start p-3 border-gray-400 border-[3px] border-solid rounded-[22px]">
                    <Heading as="h2" className="!text-gray-400 tracking-[-0.64px]">
                      prêt hypothécaire
                    </Heading>
                  </a>
                  <a href="#" className="self-start p-3 border-gray-400 border-[3px] border-solid rounded-[22px]">
                    <Heading as="h3" className="!text-gray-400 tracking-[-0.64px]">
                      correct
                    </Heading>
                  </a>
                  <div className="flex justify-center w-[22%] md:w-full md:p-5">
                    <div className="flex flex-col items-end">
                      <a href="#" className="px-[13px] py-3 border-gray-600 border-[3px] border-solid rounded-[22px]">
                        <Heading as="h4" className="tracking-[-0.64px]">
                          selon laquelle
                        </Heading>
                      </a>
                      <Img
                        src="images/img_vector_black_900.svg"
                        alt="vectorone_one"
                        className="h-[19px] w-[19px] mt-[-16px] mr-1 md:mr-0"
                      />
                    </div>
                  </div>
                  <a href="#" className="self-start p-3 border-gray-400 border-[3px] border-solid rounded-[22px]">
                    <Heading as="h5" className="!text-gray-400 tracking-[-0.64px]">
                      citer
                    </Heading>
                  </a>
                  <a href="#" className="self-start p-3 border-gray-400 border-[3px] border-solid rounded-[22px]">
                    <Heading as="h6" className="!text-gray-400 tracking-[-0.64px]">
                      nourriture
                    </Heading>
                  </a>
                </div>
              </div>
              <Button size="4xl" className="sm:px-5 tracking-[-0.64px] font-bold min-w-[142px] rounded-[22px]">
                I don&#39;t know
              </Button>
            </div>
          </div>
        </div>
        <Footer className="p-[37px] sm:p-5 bg-gray-100" />
      </div>
    </>
  );
}
