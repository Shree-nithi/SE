import React from "react";
import { Heading, Button, Img } from "./..";

export default function ClassbookOneRowsix({
  showwordsina = "Show words in a list",
  displaytheadd = "Display the &#39;Add&#39; and &#39;Remove&#39; buttons",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col w-full gap-5">
        <div className="flex gap-2.5">
          <Button size="xs" className="w-[20px] !bg-cyan-800 rounded">
            <Img src="images/img_checkbox.svg" />
          </Button>
          <Heading as="h1" className="!text-blue_gray-900 !font-semibold">
            {showwordsina}
          </Heading>
        </div>
        <div className="flex gap-2.5">
          <div className="self-start h-[20px] w-[20px] bg-gray-400 rounded" />
          <Heading as="h2" className="self-end !text-gray-600_02 !font-semibold">
            {displaytheadd}
          </Heading>
        </div>
      </div>
    </div>
  );
}
