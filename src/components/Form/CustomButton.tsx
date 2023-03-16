import { Button, Icon } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

import React from "react";

const CustomButton = ({
  title,
  onClick,
  rounded,
  width,
  type,
  isLoading,
  isDisabled
}: {
  title: string;
  onClick?: () => void;
  width?: string;
  rounded?: string;
  type?: "button" | "submit" | "reset" | undefined
  isLoading?: boolean
  isDisabled?: boolean
}) => {

  return (
    <Button
      bg="black"
      color="white"
      onClick={onClick}
      rightIcon={<Icon as={BsArrowRight} ml={{base: 3, xl: 9}} />}
      fontWeight={500}
      rounded={rounded || 'sm'}
      height={{base: 12, xl: 14}}
      width={width || {base: '9rem', xl:  "12rem"}}
      _hover={{ hover: "none" }}
      type={type}
      isLoading={isLoading}
      isDisabled={isDisabled}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
