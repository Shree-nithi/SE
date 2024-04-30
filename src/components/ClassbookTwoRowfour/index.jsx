import React from "react";
import { Button, Img, Heading } from "./..";

export default function ClassbookTwoRowfour({ imagetenoneOne, sprint, imageelevenone, audiocall, ...props }) {
  return (
    <div {...props}>
      <div className="flex justify-center w-[39%] sm:w-full">
        <div className="flex items-center gap-[9px] bg-red-100 rounded-[14px]">
          {!!imagetenoneOne ? (
            <Img src={imagetenoneOne} alt="imagetenone_one" className="w-[44px] object-cover rounded-[14px]" />
          ) : null}
          <a href="#" className="self-end">
            {!!sprint ? (
              <Heading as="h1" className="!text-gray-600_01 tracking-[-0.64px]">
                {sprint}
              </Heading>
            ) : null}
          </a>
        </div>
      </div>
      <div className="flex justify-center flex-1">
        <div className="flex items-center gap-3.5 bg-blue_gray-100 rounded-[14px]">
          {!!imageelevenone ? (
            <Img src={imageelevenone} alt="imageelevenone" className="w-[44px] object-cover rounded-[14px]" />
          ) : null}
          <a href="#">
            {!!audiocall ? (
              <Heading as="h2" className="!text-cyan-800 tracking-[-0.64px]">
                {audiocall}
              </Heading>
            ) : null}
          </a>
        </div>
      </div>
      <Button size="2xl" className="w-[40px] !bg-gray-100 rounded">
        <Img src="images/img_component_2_gray_400.svg" />
      </Button>
    </div>
  );
}
