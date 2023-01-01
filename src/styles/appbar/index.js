import { List, ListItemText, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/montez";
// Container
export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

// Header

export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "1.8rem",
  fontFamily: `'Montez', 'cursive'`,
  color: Colors.secondary,
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const MyListItem = styled(ListItemText)(({ type }) => ({
  cursor: "pointer",
  fontSize: ".7rem",
}));

export const ActionIconContainerDesktop = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 999,
  borderTop: ` ${Colors.border}`,
}));

export const ActionIconContainerMobile = styled(Box)(() => ({
  flexGrow: 0,
}));
