import { createTheme, styled, Checkbox, Radio } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(255, 255, 255)",
    },
  },
});

export const sxStyle = {
    "& .MuiTypography-root": {
      fontFamily: "CaslonAntique",
      fontSize: "1.2rem",
    },
  };

export const CustomizedCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const RadioCustom = styled(Radio)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
