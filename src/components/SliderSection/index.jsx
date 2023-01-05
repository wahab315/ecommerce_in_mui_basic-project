import React, { useEffect, useState } from "react";
import { Slide } from "@mui/material";
import { SliderBox, SliderContainer, SliderMessage } from "../../styles/slider";

const messages = [
  "20% off your first order",
  "Summer sale starts now visit any store",
  "Please like and subscribe:)",
];
const SliderSection = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <SliderContainer>
        <Slide direction={show ? "left" : "right"} in={show}>
          <SliderBox>
            <SliderMessage>{messages[messageIndex]}</SliderMessage>
          </SliderBox>
        </Slide>
      </SliderContainer>
    </>
  );
};

export default SliderSection;
