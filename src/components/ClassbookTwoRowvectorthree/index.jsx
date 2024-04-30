import React from "react";
import { Button, Text } from "./..";

export default function ClassbookTwoRowvectorthree({
  a1 = "A1",
  easy = "Easy",
  a2 = "A2",
  easy1 = "Easy",
  b1 = "B1",
  medium = "Medium",
  b2 = "B2",
  medium1 = "Medium",
  c1 = "C1",
  hard = "Hard",
  c2 = "C2",
  hard1 = "Hard",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col w-[12%] md:w-full gap-1.5">
        <div className="flex justify-center items-start gap-3">
          <Text size="md" as="p" className="h-[38px] tracking-[-1.04px]">
            {a1}
          </Text>
          <Button className="w-full mt-[5px] !text-gray-100 tracking-[-0.48px] font-semibold !bg-green-400 rounded">
            {easy}
          </Button>
        </div>
        <div className="h-[2px] bg-black-900" />
      </div>
      <div className="flex justify-center items-start w-[13%] md:w-full gap-3">
        <Text size="md" as="p" className="!text-gray-600 tracking-[-1.04px]">
          {a2}
        </Text>
        <Button className="w-full mt-[5px] !text-green-400 tracking-[-0.48px] font-semibold !bg-green-400_4c rounded">
          {easy1}
        </Button>
      </div>
      <div className="flex justify-center items-start gap-3">
        <Text size="md" as="p" className="h-[38px] !text-gray-600 tracking-[-1.04px]">
          {b1}
        </Text>
        <Button className="mt-[5px] !text-lime-700 tracking-[-0.48px] font-semibold !bg-lime-700_4c min-w-[66px] rounded">
          {medium}
        </Button>
      </div>
      <div className="flex justify-center items-start gap-3">
        <Text size="md" as="p" className="!text-gray-600 tracking-[-1.04px]">
          {b2}
        </Text>
        <Button className="mt-[5px] !text-lime-700 tracking-[-0.48px] font-semibold !bg-lime-700_4c min-w-[66px] rounded">
          {medium1}
        </Button>
      </div>
      <div className="flex justify-center items-start w-[12%] md:w-full gap-3">
        <Text size="md" as="p" className="h-[38px] !text-gray-600 tracking-[-1.04px]">
          {c1}
        </Text>
        <Button className="w-full mt-[5px] !text-red-400 tracking-[-0.48px] font-semibold !bg-red-400_4c rounded">
          {hard}
        </Button>
      </div>
      <div className="flex justify-center items-start gap-3 flex-1">
        <Text size="md" as="p" className="!text-gray-600 tracking-[-1.04px]">
          {c2}
        </Text>
        <Button className="w-full mt-[5px] !text-red-400 tracking-[-0.48px] font-semibold !bg-red-400_4c rounded">
          {hard1}
        </Button>
      </div>
    </div>
  );
}
