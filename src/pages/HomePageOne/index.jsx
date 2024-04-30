import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img } from "../../components";
import Footer1 from "../../components/Footer1";
import Header3 from "../../components/Header3";
import { Link } from "react-router-dom"; // Import Link for navigation

export default function HomePageOnePage() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <Header3 className="p-6 sm:p-5 bg-gray-100 shadow-bs" />
        <div>
          <div className="h-[740px] p-[30px] sm:p-5 bg-gray-100 relative">
            <Img
              src="images/img_image_12.png"
              alt="imagetwelveone"
              className="h-[571px] w-[30%] bottom-[4%] right-[6%] m-auto object-cover absolute"
            />
            <div className="h-[523px] w-[62%] top-[13%] right-0 left-0 m-auto absolute">
              <Img
                src="images/img_casual_life_3d.png"
                alt="casuallife3d"
                className="h-[507px] w-[52%] right-0 bottom-0 top-0 my-auto object-cover absolute"
              />
              <div className="flex w-[57%] h-full left-0 bottom-0 top-0 my-auto absolute">
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
                          <Heading size="lg" as="h2" className="w-[75%] md:w-full tracking-[-0.72px]">
                            Practice your Math and learn new things with the platform.
                          </Heading>
                        </div>
                      </div>
                      <Button size="4xl" className="sm:px-5 tracking-[-0.64px] font-bold min-w-[165px] rounded-[22px]">
                        About platform
                      </Button>
                    </div>
                    <div className="flex justify-between items-center w-[66%] md:w-full gap-5">
                      <div className="flex justify-center w-[46%]">
                        <div className="flex flex-col items-center">
                          <div className="flex justify-center items-start gap-2.5">
                            <Img src="images/img_vector.svg" alt="vectorone_one" className="h-[30px] mt-[11px]" />
                            <Text size="xl" as="p" className="tracking-[-0.80px]">
                              <span className="text-black-900">6</span>
                              <span className="text-black-900">00</span>
                              <span className="text-cyan-800">+</span>
                            </Text>
                          </div>
                          <a href="#" className="mt-[-5px]">
                            <Heading as="h3" className="!text-gray-700 tracking-[-0.64px] !font-semibold">
                              Popular sums
                            </Heading>
                          </a>
                        </div>
                      </div>
                      <div className="self-end h-[48px] w-px bg-gray-300" />
                      <div className="flex justify-center w-[26%]">
                        <div className="flex flex-col">
                          <div className="flex justify-center items-start gap-2.5">
                            <Img src="images/img_frame_35271.svg" alt="image_one" className="h-[30px] mt-[11px]" />
                            <Text size="xl" as="p" className="tracking-[-0.80px]">
                              <span className="text-black-900">2</span>
                              <span className="text-cyan-800">+</span>
                            </Text>
                          </div>
                          <a href="#" className="mt-[-5px]">
                            <Heading as="h4" className="!text-gray-700 tracking-[-0.64px] !font-semibold">
                              Mini-games
                            </Heading>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_image_6.png"
                    alt="imagesixone_one"
                    className="self-end w-[21%] md:w-full md:h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col justify-between items-center gap-5 p-[77px] md:p-5 bg-white-A700">
            <Img
              src="images/img_image_8.png"
              alt="imageeightone"
              className="w-[49%] md:w-full md:h-auto ml-[292px] md:ml-0 object-cover"
            />
            <div className="flex flex-col w-[40%] md:w-full mr-[298px] gap-[29px] md:mr-0">
              <Text size="3xl" as="p" className="tracking-[-1.92px]">
                Solve your sums in a playful way
              </Text>
              <Heading size="lg" as="h2" className="w-[84%] md:w-full tracking-[-0.72px]">
                Make learning more fun with mini-quiz
              </Heading>
              <div className="flex w-[68%] md:w-full gap-[21px]">
                <div className="w-[43%]">
                  <div className="flex flex-col">
                    <Img src="images/img_image_10.png" alt="imagetenone_one" className="h-[106px] z-[1] object-cover" />
                    <a href="#" className="mt-[-73px]">
                      <Text />
                    </a>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col items-center">
                    <div className="w-[53%] md:w-full z-[1]">
                      <Img
                        src="images/img_image_11.png"
                        alt="imageelevenone"
                        className="h-[106px] w-full md:h-auto object-cover"
                      />
                    </div>
                    <div className="flex self-stretch justify-center mt-[-73px] p-3 bg-blue_gray-100 rounded-[14px]">
                      <Heading as="h3" className="mt-[67px] !text-cyan-800 tracking-[-0.64px] text-center">
                        Audio-call →
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col items-center pl-[95px] pr-14 gap-5 py-[95px] md:p-5 bg-gray-100">
            <div className="flex flex-col items-start w-[25%] md:w-full gap-[33px] md:p-5">
              <div className="flex flex-col self-stretch gap-[30px]">
                <Text size="3xl" as="p" className="tracking-[-1.92px]">
                  Increase your Math ability
                </Text>
                <Heading size="lg" as="h2" className="w-[84%] md:w-full tracking-[-0.72px]">
                  Traditional and new effective approaches to study math
                </Heading>
              </div>
              {/* Use Link component to navigate to SprintGameOnePage */}
              <Link to="/ClassbookOne">
                <Button size="4xl" className="sm:px-5 tracking-[-0.64px] font-bold min-w-[131px] rounded-[22px]">
                  Textbook →
                </Button>
              </Link>

            </div>
          <Img
              src="images/img_image_2.png"
              alt="imagetwoone_one"
              className="w-[30%] md:w-full md:h-auto object-cover"
            />
          </div>
          <div className="flex md:flex-col items-center pl-[95px] pr-14 gap-5 py-[95px] md:p-5 bg-white-A700">
            <Img
              src="images/img_image_1.png"
              alt="imageoneone_one"
              className="w-[57%] md:w-full md:h-auto ml-[274px] md:ml-0 object-cover"
            />
            <div className="flex flex-col items-start w-[40%] md:w-full gap-[33px]">
              <div className="flex flex-col self-stretch gap-[30px]">
                <Text size="3xl" as="p" className="tracking-[-1.92px]">
                  Watch your progress every day
                </Text>
                <Heading size="lg" as="h2" className="w-[84%] md:w-full tracking-[-0.72px]">
                  Save statistics on your achievements and mistakes
                </Heading>
              </div>
              <Button size="4xl" className="sm:px-5 tracking-[-0.64px] font-bold min-w-[129px] rounded-[22px]">
                Statistics →
              </Button>
            </div>
          </div>
        </div>
        <Footer1 className="gap-[17px] p-[37px] sm:p-5 bg-gray-100" />
      </div>
    </>
  );
}


