import React from "react";
import { Text, Img } from "./..";

export default function ClassbookTwoRowvectorone({
  fluenthatgrad = "images/img_fluent_hat_grad_gray_400.svg",
  textbook = "Textbook",
  vectoronethree,
  ionbookoneOne,
  dictionary,
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex justify-center items-start gap-2.5">
        <Img src={fluenthatgrad} alt="fluenthatgrad" className="h-[32px] w-[32px]" />
        <Text size="md" as="p" className="!text-gray-600 tracking-[-1.04px]">
          {textbook}
        </Text>
      </div>
      {!!vectoronethree ? <div className="h-[32px] w-px sm:w-[32px] sm:h-px bg-gray-300" /> : null}
      <div className="flex justify-center items-start gap-2.5">
        {!!ionbookoneOne ? <Img src={ionbookoneOne} alt="ionbookone_one" className="h-[32px] w-[32px]" /> : null}
        {!!dictionary ? (
          <Text size="md" as="p" className="tracking-[-1.04px]">
            {dictionary}
          </Text>
        ) : null}
      </div>
    </div>
  );
}
