import React from "react";
import { Heading, Button, Img, Text } from "./..";

export default function SprintGameFourColumniknow({
  iknow = "I know",
  p15words = "15 words",
  lone = "lone",
  solitaire = "- solitaire",
  lone1 = "anniversary",
  anniversaire = "- anniversaire",
  lone2 = "lone",
  solitaire1 = "- solitaire",
  lone3 = "anniversary",
  anniversaire1 = "- anniversaire",
  lone4 = "lone",
  solitaire2 = "-  solitaire",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex items-start gap-2.5">
        <Text as="p" className="tracking-[-1.28px]">
          {iknow}
        </Text>
        <Button className="mt-[9px] tracking-[-0.48px] font-semibold min-w-[66px] rounded-md">{p15words}</Button>
      </div>
      <div className="flex flex-col self-stretch gap-3.5">
        <div className="flex justify-between items-start gap-5 flex-1">
          <div className="flex justify-between items-center gap-5">
            <Button size="2xl" className="w-[40px] !bg-gray-100 rounded">
              <Img src="images/img_frame_21.svg" />
            </Button>
            <div className="flex justify-center gap-1 py-px">
              <a href="#">
                <Heading as="h1" className="!text-black-900 tracking-[-0.64px] !font-semibold">
                  {lone}
                </Heading>
              </a>
              <a href="#">
                <Heading as="h2" className="tracking-[-0.64px] !font-semibold">
                  {solitaire}
                </Heading>
              </a>
            </div>
          </div>
          <div className="h-[34px] w-[6px] bg-gray-300 rounded-[50%]" />
        </div>
        <div className="flex justify-between items-center mr-1 gap-5 md:mr-0">
          <Button size="2xl" className="w-[40px] !bg-cyan-800 rounded">
            <Img src="images/img_frame_22.svg" />
          </Button>
          <div className="flex justify-center pt-px gap-1">
            <a href="#" className="self-end">
              <Heading as="h2" className="!text-black-900 tracking-[-0.64px] !font-semibold">
                {lone1}
              </Heading>
            </a>
            <a href="#" className="self-start">
              <Heading as="h3" className="tracking-[-0.64px] !font-semibold">
                {anniversaire}
              </Heading>
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center mr-[94px] gap-5 md:mr-0">
          <Button size="2xl" className="w-[40px] !bg-gray-100 rounded">
            <Img src="images/img_frame_21.svg" />
          </Button>
          <div className="flex gap-1 py-px">
            <a href="#">
              <Heading as="h2" className="!text-black-900 tracking-[-0.64px] !font-semibold">
                {lone2}
              </Heading>
            </a>
            <a href="#">
              <Heading as="h3" className="tracking-[-0.64px] !font-semibold">
                {solitaire1}
              </Heading>
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center mr-1 gap-5 md:mr-0">
          <Button size="2xl" className="w-[40px] !bg-gray-100 rounded">
            <Img src="images/img_frame_21.svg" />
          </Button>
          <div className="flex justify-center pt-px gap-1">
            <a href="#" className="self-end">
              <Heading as="h2" className="!text-black-900 tracking-[-0.64px] !font-semibold">
                {lone3}
              </Heading>
            </a>
            <a href="#" className="self-start">
              <Heading as="h3" className="tracking-[-0.64px] !font-semibold">
                {anniversaire1}
              </Heading>
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center mr-[90px] gap-5 md:mr-0">
          <Button size="2xl" className="w-[40px] !bg-gray-100 rounded">
            <Img src="images/img_frame_21.svg" />
          </Button>
          <div className="flex gap-1 py-px">
            <a href="#">
              <Heading as="h2" className="!text-black-900 tracking-[-0.64px] !font-semibold">
                {lone4}
              </Heading>
            </a>
            <a href="#">
              <Heading as="h3" className="tracking-[-0.64px] !font-semibold">
                {solitaire2}
              </Heading>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
