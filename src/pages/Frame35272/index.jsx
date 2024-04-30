import React from "react";
import { Helmet } from "react-helmet";
import { Img } from "../../components";

export default function Frame35272Page() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex justify-end w-full pt-[63px] pl-14 pr-[63px] md:pt-5 md:px-5 bg-gray-100">
        <Img
          src="images/img_image_2_1162x494.png"
          alt="imagetwoone_one"
          className="self-end w-[40%] mr-[72px] md:mr-0 object-cover"
        />
      </div>
    </>
  );
}
