import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/system";
import React from "react";
import { products } from "../../data";
import {
  Product,
  ProductImage,
  ProductMetaWrapper,
} from "../../styles/products";
const Products = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const renderProducts = products.map((product) => (
    <Grid
      item
      key={product.id}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      <ProductCard product={product} matches={matches} />
    </Grid>
  ));

  return (
    <>
      <Container>
        <Grid
          container
          justifyContent={"center"}
          sx={{ margin: "20px 4px 10px 4px" }}
        >
          {renderProducts}
        </Grid>
      </Container>
    </>
  );
};

export default Products;

const ProductCard = ({ product, matches }) => {
  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
      </Product>
    </>
  );
};

const ProductMeta = ({ product, matches }) => {
  return (
    <>
      <ProductMetaWrapper>
        <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
          {product.name}
        </Typography>
        <Typography variant={matches ? "caption" : "body1"} lineHeight={2}>
          $ {product.price}
        </Typography>
      </ProductMetaWrapper>
    </>
  );
};
