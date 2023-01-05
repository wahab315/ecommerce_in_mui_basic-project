import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
export const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  backgroundColor: Colors.light_gray,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "50%",
  //   [theme.breakpoints.down('md')]:{
  //     window
  //   }
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

export const BannerContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "50%",
  padding: "30px",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  fontSize: "3.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.6rem",
  },
}));

export const BannerPara = styled(Typography)(({ theme }) => ({
  marginBottom: "3em",
  letterSpacing: "2.25px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    letterSpacing: "1.15",
    marginBottom: "1.5em",
  },
}));

export const BannerButton = styled(Button)(({ theme }) => ({
  padding: "1rem 1rem",
  width: "200px",
  color: "#ffffff",
  backgroundColor: Colors.primary,
  [theme.breakpoints.down("md")]: {
    marginBottom: "4rem",
  },
}));
