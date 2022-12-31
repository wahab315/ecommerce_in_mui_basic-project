import "./App.css";
import { CssBaseline, Button, Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useEffect } from "react";
import theme from "./styles/theme";
import Home from "./modules/Home";

function App() {
  useEffect(() => {
    document.title = "Ecommerce Project";
  }, []);
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <Container
          maxWidth="xl"
          sx={{
            background: "#fff",
          }}
        >
          <Home />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
