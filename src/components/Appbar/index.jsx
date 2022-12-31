import React from "react";
import { useTheme } from "@mui/material/styles";
// Mui Components
import { ListItemButton, ListItemIcon, useMediaQuery } from "@mui/material";
// Styles
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
  MyListItem,
} from "../../styles/appbar";

// Icons
import  SearchIcon  from "@mui/icons-material/Search";

const Appbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <Mobile /> : <Desktop />}</>;
};

export default Appbar;

// For Mobile
const Mobile = () => {
  return (
    <>
      <h1>Mobile</h1>
    </>
  );
};

// For Desktop

const Desktop = () => {
  return (
    <>
      <AppbarContainer>
        <AppbarHeader>My Bags</AppbarHeader>
        <MyList type="row">
          <MyListItem primary="Home" />
          <MyListItem primary="Categories" />
          <MyListItem primary="Product" />
          <MyListItem primary="Contact Us" />
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
          </ListItemButton>
        </MyList>
      </AppbarContainer>
    </>
  );
};
