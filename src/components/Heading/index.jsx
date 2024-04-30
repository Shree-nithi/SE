import React from "react";

const sizes = {
  "3xl": "text-4xl font-semibold leading-[100%] md:text-[34px] sm:text-[32px]",
  "2xl": "text-[32px] font-semibold leading-[100%] md:text-3xl sm:text-[28px]",
  xl: "text-xl font-bold leading-[100%]",
  "5xl": "text-5xl font-bold leading-[100%] md:text-[44px] sm:text-[38px]",
  "4xl": "text-[42px] font-semibold leading-[100%] md:text-[38px] sm:text-[32px]",
  s: "text-sm font-semibold leading-[100%]",
  md: "text-base font-bold leading-[100%]",
  "6xl": "text-[56px] font-bold leading-[100%] md:text-5xl sm:text-[42px]",
  xs: "text-xs font-semibold leading-[100%]",
  lg: "text-lg font-semibold leading-[140%]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-600 font-montserrat ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
