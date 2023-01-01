import React from "react";
import { useTheme } from "@mui/material/styles";
// Mui Components
import {
  Divider,
  ListItemButton,
  ListItemIcon,
  useMediaQuery,
  IconButton,
} from "@mui/material";
// Styles
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
  MyListItem,
  ActionIconContainerDesktop,
  ActionIconContainerMobile,
} from "../../styles/appbar";

// Icons
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

const Appbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? <Mobile matches={matches} /> : <Desktop matches={matches} />}
    </>
  );
};

export default Appbar;

// For Mobile
const Mobile = ({ matches }) => {
  return (
    <>
      <AppbarContainer>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <AppbarHeader textAlign={"center"} variant="h4">
          My Bags
        </AppbarHeader>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Actions matches={matches} />
      </AppbarContainer>
    </>
  );
};

// For Desktop

const Desktop = ({ matches }) => {
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
        <Actions matches={matches} />
      </AppbarContainer>
    </>
  );
};

//  Sub Components For Actions
const Actions = ({ matches }) => {
  const Components = matches
    ? ActionIconContainerDesktop
    : ActionIconContainerMobile;

  return (
    <>
      <Components>
        <MyList type="row">
          <ListItemButton
            sx={{
              justifyContent: "center",
            }}
          >
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ShoppingCartIcon />
            </ListItemIcon>
          </ListItemButton>
          <Divider orientation="vertical" flexItem />
          <ListItemButton
            sx={{
              justifyContent: "center",
            }}
          >
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FavoriteIcon />
            </ListItemIcon>
          </ListItemButton>
          <Divider orientation="vertical" flexItem />
          <ListItemButton
            sx={{
              justifyContent: "center",
            }}
          >
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PersonIcon />
            </ListItemIcon>
          </ListItemButton>
        </MyList>
      </Components>
    </>
  );
};
