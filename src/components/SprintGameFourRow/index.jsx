import React from "react";
import { Heading, Button, Img } from "./..";

export default function SprintGameFourRow({ lone = "lone", solitaire = "- solitaire", ...props }) {
  return (
    <div {...props}>
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
  );
}
