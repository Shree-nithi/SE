import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-md",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-black-900",
    blue_gray_100_01: "bg-blue_gray-100 text-cyan-800",
    cyan_800_01: "bg-cyan-800 text-white-A700",
    lime_700_4c: "bg-lime-700_4c text-lime-700",
    green_400_4c: "bg-green-400_4c text-green-400",
    red_400_4c: "bg-red-400_4c text-red-400",
    red_400: "bg-red-400 text-gray-100",
    green_400: "bg-green-400 text-gray-100",
    cyan_800: "bg-cyan-800 text-white-A700",
    gray_100: "bg-gray-100",
    blue_gray_100: "bg-blue_gray-100 text-cyan-800",
  },
  outline: {
    blue_gray_400_01: "border-blue_gray-400 border-[3px] border-solid text-blue_gray-400",
    blue_gray_400: "border-blue_gray-400 border-[3px] border-solid text-blue_gray-400",
  },
};
const sizes = {
  "5xl": "h-[155px] px-[35px] text-[54px]",
  xs: "h-[20px] px-[3px]",
  xl: "h-[36px] px-[18px] text-sm",
  md: "h-[28px] px-3 text-sm",
  lg: "h-[32px] px-[19px] text-sm",
  "4xl": "h-[44px] px-[21px] text-base",
  "3xl": "h-[40px] px-3 text-base",
  "2xl": "h-[40px] px-[9px]",
  sm: "h-[25px] px-1.5 text-xs",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "blue_gray_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["5xl", "xs", "xl", "md", "lg", "4xl", "3xl", "2xl", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "blue_gray_100_01",
    "cyan_800_01",
    "lime_700_4c",
    "green_400_4c",
    "red_400_4c",
    "red_400",
    "green_400",
    "cyan_800",
    "gray_100",
    "blue_gray_100",
    "blue_gray_400_01",
    "blue_gray_400",
  ]),
};

export { Button };
