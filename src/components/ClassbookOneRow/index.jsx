import React from "react";
import { Heading, Img } from "./..";

export default function ClassbookOneRow({
  imagefiftyfive = "images/add.jpg",
  zero = "5",
  zeroone = "1",
  zerotwo = "0",
  ...props
}) {
  return (
    <div {...props}>
      <div className="h-[336px] w-full relative">
        <Img
          src={imagefiftyfive}
          alt="imagefiftyfive"
          className="justify-center h-[336px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
        />
        <div className="flex flex-col items-start w-[47%] gap-2 right-0 top-[12%] p-2 m-auto rounded-tl-lg rounded-bl-lg bg-black-900_b2 absolute">
          <div className="flex items-center gap-2 py-px">
            <Img src="images/img_bookmark.svg" alt="bookmarkone_one" className="h-[16px] w-[16px]" />
            <Heading as="h1" className="!text-white-A700 tracking-[-0.64px] !font-semibold">
              {zero}
            </Heading>
            <Heading as="h2" className="!text-white-A700 tracking-[-0.64px] !font-semibold">
              encountered
            </Heading>
          </div>
          <div className="flex items-center gap-2 py-px">
            <Img src="images/img_star.svg" alt="image_one" className="h-[16px] w-[16px]" />
            <Heading as="h3" className="!text-white-A700 tracking-[-0.64px] !font-semibold">
              {zeroone}
            </Heading>
            <Heading as="h4" className="!text-white-A700 tracking-[-0.64px] !font-semibold">
              learned
            </Heading>
          </div>
          <div className="flex items-center gap-2 py-px">
            <Img src="images/img_lightning.svg" alt="lightningone" className="h-[16px] w-[16px]" />
            <Heading as="h5" className="!text-white-A700 tracking-[-0.64px] !font-semibold">
              {zerotwo}
            </Heading>
            <Heading as="h6" className="!text-white-A700 tracking-[-0.64px] !font-semibold">
              best series
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
