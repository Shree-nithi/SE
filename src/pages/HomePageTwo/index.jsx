import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Heading, Text } from "../../components";
import Header1 from "../../components/Header1";
import HomePageTwoRowvectorone from "../../components/HomePageTwoRowvectorone";

export default function HomePageTwoPage() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full gap-10 bg-gray-100">
        <Header1 />
        <div className="flex flex-col items-end">
          <div className="flex justify-end w-[79%] md:w-full mt-10 mb-[29px] mr-[117px] md:mr-0">
            <div className="h-[641px] w-full relative">
              <div className="h-[548px] w-[81%] left-0 top-0 m-auto absolute">
                <Img
                  src="images/img_casual_life_3d.png"
                  alt="casuallife3d"
                  className="h-[507px] w-[52%] bottom-0 right-0 m-auto object-cover absolute"
                />
                <div className="flex w-[57%] left-0 top-0 m-auto absolute">
                  <div className="flex md:flex-col items-center w-full">
                    <div className="flex flex-col gap-[42px] md:p-5 flex-1">
                      <div className="flex flex-col items-start gap-[31px]">
                        <div className="flex flex-col self-stretch gap-[21px]">
                          <Heading as="h1" className="!text-cyan-800 tracking-[2.24px] uppercase">
                            E-COURSE PLATFORM
                          </Heading>
                          <div className="flex flex-col gap-[29px]">
                            <Text size="4xl" as="p" className="tracking-[-2.24px]">
                              <>
                                Learning and
                                <br />
                                teaching online,
                                <br />
                                made easy.
                              </>
                            </Text>
                            <Heading size="lg" as="h2" className="w-[73%] md:w-full tracking-[-0.72px]">
                              Practice your English and learn new things with the platform.
                            </Heading>
                          </div>
                        </div>
                        <Button
                          size="4xl"
                          className="sm:px-5 tracking-[-0.64px] font-bold min-w-[165px] rounded-[22px]"
                        >
                          About platform
                        </Button>
                      </div>
                      <HomePageTwoRowvectorone className="flex justify-between items-center w-[65%] md:w-full gap-5" />
                    </div>
                    <Img
                      src="images/img_image_6.png"
                      alt="imagesixone_one"
                      className="self-end w-[21%] md:w-full md:h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
              <Img
                src="images/img_image_12.png"
                alt="imagetwelveone"
                className="h-[571px] w-[37%] bottom-0 right-0 m-auto object-cover absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
