import React from "react";
import { Heading, Img } from "./..";

export default function Footer1({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[1180px]">
        <div className="flex justify-center w-[35%] md:w-full gap-5">
          <Heading size="s" as="p">
            Home
          </Heading>
          <Heading size="s" as="p" className="self-start">
            Textbook
          </Heading>
          <Heading size="s" as="p" className="self-start">
            Quiz
          </Heading>
          <Heading size="s" as="p" className="self-end inline">
            Performance
          </Heading>
        </div>
        <div className="flex self-start justify-between w-[17%] md:w-full gap-5">
          <Heading size="s" as="p">
            Shreenithi
          </Heading>
          <Heading size="s" as="p">
            Shiva
          </Heading>
          <Heading size="s" as="p">
            Apoorva
          </Heading>
          <Heading size="s" as="p">
          Sri Vaishnavi
          </Heading>

        </div>
      </div>
      <div>
        <Heading size="xs" as="p">
        <span className="text-gray-600 flex self-start justify-between w-[17%] md:w-full gap-5" style={{textAlign: 'left'}}>
  Intel Hackathon Project using
  <a href="https://www.intel.com/content/www/us/en/developer/tools/oneapi/ai-tools-selector.html" className="text-gray-600 underline">
    Intel tools
  </a>
</span>

        </Heading>
      </div>
    </footer>
  );
}
