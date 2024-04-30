import React from "react";

const sizes = {
  xs: "text-base font-medium leading-[100%]",
  lg: "text-[32px] font-normal leading-[100%] md:text-3xl sm:text-[28px]",
  s: "text-xl font-normal leading-[100%]",
  "2xl": "text-[44px] font-normal leading-[100%] md:text-[40px] sm:text-[34px]",
  "3xl": "text-5xl font-normal leading-[100%] md:text-[44px] sm:text-[38px]",
  "4xl": "text-[56px] font-normal leading-[120%] md:text-5xl sm:text-[42px]",
  xl: "text-[40px] font-normal leading-[100%] md:text-[38px] sm:text-4xl",
  md: "text-[26px] font-normal leading-[100%] md:text-2xl sm:text-[22px]",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-delagothicone ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
