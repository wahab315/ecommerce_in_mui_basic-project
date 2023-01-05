import { Typography } from "@mui/material";
import React from "react";
import {
  BannerButton,
  BannerContainer,
  BannerContent,
  BannerImage,
  BannerPara,
  BannerTitle,
} from "../../styles/banner";
// Assests
import banner from "../../assets/images/banner/banner.png";

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <BannerImage src={banner} />

        <BannerContent>
          <Typography variant="h6">Huge Collection</Typography>
          <BannerTitle variant="h2">New Bags</BannerTitle>
          <BannerPara variant="h6">
            Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
            eiusmo tempor incididunt ut labore et dolore magna
          </BannerPara>
          <BannerButton>shop now</BannerButton>
        </BannerContent>
      </BannerContainer>
    </>
  );
};

export default Banner;
