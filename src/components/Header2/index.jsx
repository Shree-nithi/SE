import React from "react";
import { Button, Heading, Img, Text } from "./..";
import { Link } from "react-router-dom";

export default function Header2({ ...props }) {
  return (
    <header {...props}>
      <div className="flex sm:flex-col justify-between items-center w-full gap-5">
        <div className="flex justify-between items-start w-[51%] sm:w-full gap-5">
          <Text size="xs" as="p" className="tracking-[-0.33px] !text-[16.39px] !font-normal">
            Edueteens
          </Text>
          <div className="h-[14px] w-px mt-1 bg-gray-300" />
          <Link to="/" className="mt-1">
            <Heading size="s" as="p" className="!text-gray-700 tracking-[-0.56px]">
              Main
            </Heading>
          </Link>
          <a href="#">
            <Heading size="s" as="p" className="!text-gray-700 tracking-[-0.56px]">
              Guide
            </Heading>
          </a>
          <a href="#">
            <Heading size="s" as="p" className="!text-gray-700 tracking-[-0.56px]">
              Statistics
            </Heading>
          </a>
          <div className="flex justify-center items-center">
            <Heading size="s" as="p" className="!text-gray-700 tracking-[-0.56px]">
              Games
            </Heading>
            <Img src="images/img_frame_8.svg" alt="image" className="h-[12px] w-[12px]" />
          </div>
        </div>
        <Link to="/Login" className="self-end"> {/* page */}
          <Heading size="s" as="p" className="!text-black-900 tracking-[-0.56px] !font-bold">
            Login →
          </Heading>
        </Link>
        <Link to="/Login"> {/* Link to Signup page */}
          <Button color="cyan_800" size="xl" className="tracking-[-0.56px] font-bold min-w-[90px] rounded-[12px]">
            Sign Up
          </Button>
        </Link>
      </div>
    </header>
  );
}
