import { Button, IconButton } from "@mui/material";
import { Box, padding, style, styled, width } from "@mui/system";
import { Colors } from "../theme";
import { slideInBottom, slideInRight } from "../../animation";

export const Product = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  background: Colors.light_gray,
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    padding: "24px",
  },
}));

export const ProductActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton)(
  ({ isfav, theme }) => ({
    color: isfav ? Colors.primary : Colors.light,
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      right: 0,
      top: 0,
    },
  })
);

export const ProductAddToCart = styled(Button)(({ show, theme }) => ({
  width: "120px",
  fontsize: "12px",
  background: Colors.secondary,
  opacity: 0.9,
  [theme.breakpoints.up("md")]: {
    bottom: "2%",
    position: "absolute",
    width: "300px",
    padding: "10px 5px",
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.25,0.25,0.460,0.450,0.940) both`,
  },
}));

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ProductActionWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: show ? "visible" : "none",
    position: "absolute",
    right: 0,
    top: "20%",
    animation:
      show &&
      `${slideInRight} 0.5s cubic-bezier(0.25,0.25,0.460,0.450,0.940) both`,
  },
}));
