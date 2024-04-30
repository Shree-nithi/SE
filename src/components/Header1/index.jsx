import React from "react";
import { Heading, Button, Img, Text } from "./..";
import { Link } from "react-router-dom";

export default function Header1({ ...props }) {
  return (
    <header {...props}>
      <div className="w-full mx-auto md:p-5 max-w-[1180px]">
        <div className="flex md:flex-col justify-between items-center gap-5">
          <div className="flex sm:flex-col self-end justify-between items-start w-[46%] md:w-full gap-5">
            <Text size="s" as="p" className="tracking-[-0.42px] !text-[20.86px]">
              Edueteen
            </Text>
            <div className="h-[16px] w-px sm:w-[16px] sm:h-px mt-[5px] bg-gray-300" />
            <Link to="/" className="mt-1">
              <Heading as="h6" className="!text-black-900 tracking-[-0.64px] !font-semibold">
                Home
              </Heading>
            </Link>
            <a href="#" className="mt-1">
              <Heading as="h6" className="tracking-[-0.64px] !font-semibold">
                Textbook
              </Heading>
            </a>
            <a href="#" className="mt-[3px]">
              <Heading as="h6" className="tracking-[-0.64px] !font-semibold">
                Performance
              </Heading>
            </a>
            <div className="flex justify-center items-center mt-[3px] py-px">
              <Heading as="h6" className="tracking-[-0.64px] !font-semibold">
                Quiz
              </Heading>
              <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[14px] w-[14px]" />
            </div>
          </div>
          <ul className="flex justify-center items-center w-[17%] md:w-full gap-[30px]">
            <li>
              <div className="flex justify-center items-center gap-[9px]">
                <Button size="3xl" className="tracking-[-0.64px] font-bold min-w-[41px] rounded-[20px]">
                  A
                </Button>
                <a href="#">
                  <Heading as="h6" className="tracking-[-0.64px] !font-semibold">
                    Shree
                  </Heading>
                </a>
              </div>
            </li>
            <li>
              <a href="#" className="self-end cursor-pointer hover:text-gray-600 hover:font-semibold">
                <Heading as="h6" className="!text-black-900 tracking-[-0.64px]">
                  Sign Out →
                </Heading>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
