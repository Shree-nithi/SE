import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function AudiocallGameFivePage() {
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
            <div className="flex flex-col items-center w-[35%] md:w-full gap-10">
              <div className="flex flex-col self-stretch items-center gap-[35px]">
                <div className="flex flex-col w-[37%] md:w-full gap-3.5">
                  <div>
                    <div className="flex flex-col items-center">
                      <Img
                        src="images/img_frame_35278.png"
                        alt="circleimage"
                        className="h-[200px] w-[200px] rounded-[50%]"
                      />
                      <div className="flex justify-between items-center mt-[-41px] gap-5 p-2.5 bg-white-A700 shadow-sm rounded-[30px]">
                        <Button color="gray_100" size="2xl" shape="round" className="w-[40px] ml-2.5 md:ml-0 !rounded">
                          <Img src="images/img_frame_21.svg" />
                        </Button>
                        <div className="flex justify-center mr-2.5 gap-1 py-px md:mr-0">
                          <Heading size="lg" as="h1" className="!text-black-900 tracking-[-0.72px]">
                            food
                          </Heading>
                          <Heading size="lg" as="h2" className="self-start tracking-[-0.72px]">
                            - nourriture
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-full gap-2.5 mx-auto md:p-5 max-w-[200px]">
                    <Img src="images/img__pink_800.svg" alt="image_one" className="h-[47px]" />
                    <Img src="images/img__pink_800.svg" alt="imageone_one" className="h-[47px]" />
                    <Img src="images/img__pink_800.svg" alt="imagetwo_one" className="h-[47px]" />
                    <Img src="images/img__pink_800.svg" alt="imagethree_one" className="h-[47px]" />
                    <Img src="images/img__red_100.svg" alt="imagefour_one" className="h-[47px]" />
                  </div>
                </div>
                <div className="flex justify-center gap-5 md:flex-wrap">
                  <a href="#" className="p-3 border-gray-400 border-[3px] border-solid rounded-[22px]">
                    <Heading as="h3" className="!text-gray-400 tracking-[-0.64px]">
                      prêt hypothécaire
                    </Heading>
                  </a>
                  <a href="#" className="p-3 border-gray-400 border-[3px] border-solid rounded-[22px]">
                    <Heading as="h4" className="!text-gray-400 tracking-[-0.64px]">
                      correct
                    </Heading>
                  </a>
                  <a href="#" className="px-[13px] py-3 border-gray-600_01 border-[3px] border-solid rounded-[22px]">
                    <Heading as="h5" className="!text-gray-600_01 tracking-[-0.64px]">
                      selon laquelle
                    </Heading>
                  </a>
                  <a href="#" className="p-3 border-gray-400 border-[3px] border-solid rounded-[22px]">
                    <Heading as="h6" className="!text-gray-400 tracking-[-0.64px]">
                      citer
                    </Heading>
                  </a>
                  <a href="#" className="p-3 border-cyan-800 border-[3px] border-solid rounded-[22px]">
                    <Heading as="h6" className="!text-cyan-800 tracking-[-0.64px]">
                      nourriture
                    </Heading>
                  </a>
                </div>
                <Button size="4xl" className="sm:px-5 tracking-[-0.64px] font-bold min-w-[82px] rounded-[22px]">
                  Next
                </Button>
              </div>
              <div className="flex justify-center items-start gap-1">
                <Heading size="xs" as="p" className="mt-[3px]">
                  *You can also use
                </Heading>
                <Heading
                  size="s"
                  as="p"
                  className="flex justify-center items-center h-[22px] px-2 py-0.5 bg-white-A700 text-shadow-ts rounded-[5px]"
                >
                  1-5
                </Heading>
                <Heading size="xs" as="p" className="mt-[3px]">
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
