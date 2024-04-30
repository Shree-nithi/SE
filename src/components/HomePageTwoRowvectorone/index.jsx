import React from "react";
import { Heading, Text, Img } from "./..";

export default function HomePageTwoRowvectorone({
  sixhundred,
  popularwords = "Popular words",
  two,
  minigames = "Mini-games",
  ...props
}) {
  return (
    <div {...props}>
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
          <Heading as="h1" className="mt-[-5px] !text-gray-700 tracking-[-0.64px] !font-semibold">
            {popularwords}
          </Heading>
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
          <Heading as="h2" className="mt-[-5px] !text-gray-700 tracking-[-0.64px] !font-semibold">
            {minigames}
          </Heading>
        </div>
      </div>
    </div>
  );
}
