import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img } from "../../components";

export default function FrameThirteenPage() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full p-[45px] md:p-5 bg-white-A700">
        <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto max-w-[1157px]">
          <Img
            src="images/img_image_1_409x646.png"
            alt="imageoneone_one"
            className="w-[56%] md:w-full md:h-auto object-cover"
          />
          <div className="flex flex-col w-[40%] md:w-full gap-[35px] md:p-5">
            <Heading size="6xl" as="h1" className="!text-black-900 tracking-[-2.27px] !text-[56.75px]">
              <>
                Learning and
                <br />
                teaching online,
                <br />
                made easy.
              </>
            </Heading>
            <Heading size="lg" as="h2" className="w-[84%] md:w-full !text-gray-700 tracking-[-0.76px] !text-[18.92px]">
              <>
                Gain subject certification or earn money
                <br />
                while teaching online with GlobalTalk.
              </>
            </Heading>
          </div>
        </div>
      </div>
    </>
  );
}
