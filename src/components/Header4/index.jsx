import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Button, Heading, Img, Text } from "./..";

export default function Header4({ ...props }) {
  return (
    <header {...props}>
      <div className="flex md:flex-col justify-between items-center w-full gap-5">
        <div className="flex justify-between items-start w-[40%] md:w-full gap-5">
          <Text size="xs" as="p" className="tracking-[-0.33px] !text-[16.39px] !font-normal">
            Edueteens
          </Text>
          <div className="h-[16px] w-px mt-[3px] bg-gray-300" />
          {/* Update the Home link to use Link component */}
          <Link to="/">
            <Heading as="h6" className="!text-gray-700 tracking-[-0.66px] !text-[16.55px] !font-semibold">
              Home
            </Heading>
          </Link>
          <a href="#">
            <Heading as="h6" className="!text-gray-700 tracking-[-0.66px] !text-[16.55px] !font-semibold">
              Guide
            </Heading>
          </a>
          <a href="#">
            <Heading as="h6" className="!text-gray-700 tracking-[-0.66px] !text-[16.55px] !font-semibold">
              Statistics
            </Heading>
          </a>
          <div className="flex justify-center items-center">
            <Heading as="h6" className="!text-gray-700 tracking-[-0.66px] !text-[16.55px] !font-semibold">
              Games
            </Heading>
            <Img src="images/img_arrow_down_gray_700.svg" alt="arrowdown_one" className="h-[14px] w-[14px]" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <a href="#">
            <Heading as="h6" className="!text-black-900 tracking-[-0.66px] !text-[16.55px]">
              Login →
            </Heading>
          </a>
          <Button
            color="cyan_800"
            size="4xl"
            className="sm:px-5 tracking-[-0.66px] font-bold min-w-[106px] rounded-[14px]"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
