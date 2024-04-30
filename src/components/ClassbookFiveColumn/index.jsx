import React from "react";
import { Img, Button, Heading, Text } from "./..";

export default function ClassbookFiveColumn({
  imagefiftyfive = "images/img_image_55.png",
  zero = "0",
  zeroone = "0",
  zerotwo = "0",
  remark = "remark",
  note = "note",
  rimrk = "[rimɑ́ːrk]",
  compound = "compound",
  toremarkisto = "To remark is to say something. - Remarquer, c&#39;est dire quelque chose",
  description = "The teacher remarked on how quickly the students were learning. L&#39;enseignant a noté la rapidité avec laquelle les élèves apprenaient.",
  addToLearned = "Add to learned",
  removeFrom = "Remove from dictionary",
  ...props
}) {
  return (
    <div {...props}>
      <div className="self-stretch h-[250px] relative">
        <Img
          src={imagefiftyfive}
          alt="imagefiftyfive"
          className="justify-center h-[250px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
        />
        <div className="flex flex-col items-center w-[13%] gap-2 bottom-[16%] right-0 p-2 m-auto rounded-tl-lg rounded-bl-lg bg-black-900_b2 absolute">
          <div className="flex justify-center items-center gap-2 py-px">
            <Img src="images/img_bookmark.svg" alt="bookmarkone_one" className="h-[16px] w-[16px]" />
            <a href="#">
              <Heading as="h1" className="!text-white-A700 tracking-[-0.64px] !font-semibold">
                {zero}
              </Heading>
            </a>
          </div>
          <div className="flex justify-center items-center gap-2 py-px">
            <Img src="images/img_star.svg" alt="image_one" className="h-[16px] w-[16px]" />
            <a href="#">
              <Heading as="h2" className="!text-white-A700 tracking-[-0.64px] !font-semibold">
                {zeroone}
              </Heading>
            </a>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Img src="images/img_lightning.svg" alt="lightningone" className="self-end h-[16px] w-[16px]" />
            <a href="#">
              <Heading as="h3" className="!text-white-A700 tracking-[-0.64px] !font-semibold">
                {zerotwo}
              </Heading>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start w-full gap-5 p-[25px] sm:p-5">
        <div className="flex flex-col w-[77%] mb-1 ml-1 md:ml-0">
          <div className="flex flex-col items-start">
            <Text size="md" as="p" className="tracking-[-1.04px]">
              {remark}
            </Text>
            <Text size="md" as="p" className="!text-gray-600 tracking-[-1.04px]">
              {note}
            </Text>
          </div>
          <div className="flex items-center mt-[7px] gap-[11px]">
            <Heading size="lg" as="h2" className="self-end !text-black-900 tracking-[0.72px]">
              {rimrk}
            </Heading>
            <Button
              size="md"
              className="!text-gray-100 tracking-[-0.56px] font-semibold !bg-red-400 min-w-[100px] rounded"
            >
              {compound}
            </Button>
          </div>
          <div className="flex flex-col mt-5 gap-[11px]">
            <Heading size="s" as="h3" className="!text-black-900 tracking-[-0.56px] !leading-[140%]">
              {toremarkisto}
            </Heading>
            <div className="h-px rotate-[-90deg] bg-gray-300" />
            <div>
              <Heading size="s" as="h4" className="tracking-[-0.56px] !leading-[140%]">
                {description}
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-start w-[63%] md:w-full mt-5 gap-2.5">
            <Button
              size="lg"
              className="!text-gray-100 tracking-[-0.56px] font-semibold !bg-green-400 min-w-[140px] rounded-[16px]"
            >
              {addToLearned}
            </Button>
            <Button
              size="lg"
              className="w-full !text-red-400 tracking-[-0.56px] font-semibold !bg-red-400_4c rounded-[16px]"
            >
              {removeFrom}
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[-68px] mt-1 mr-[52px] pl-[9px] py-[9px] md:mr-0 bg-gray-100">
          <Img src="images/img_vector_gray_400.svg" alt="vectorone_one" className="h-[20px]" />
        </div>
      </div>
    </div>
  );
}
