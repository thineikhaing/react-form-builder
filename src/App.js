import "./App.css";
import { useState } from "react";
import { Divider } from "@mui/material";
import "@fontsource/roboto"; // Loading Roboto font. MUI was designed with this font in mind.
import {
  Card,
  CardHeader,
  Switch,
  Box,
  Container,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Routes from "./routes";
const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  // Define theme settings
  const light = {
    palette: {
      mode: "light",
    },
  };

  const dark = {
    palette: {
      mode: "dark",
    },
  };
  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <Container maxWidth="md">
        <Box component="div" p={4}></Box>
        <Card>
          <CardHeader
            title="Form Builder"
            style={{ textAlign: "left" }}
            action={
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch checked={isDarkTheme} onChange={changeTheme} />
                  }
                  label="Dark Mode"
                />
              </FormGroup>
            }
          />
          <Divider />
          <Routes />
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default App;
