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

export const formControlSxStyle = {
  width: "250px",
  border: "1px solid white",
  borderRadius: "4px",
  "& .MuiSelect-root": {
    transform: "none !important",
  },
  "& .MuiSelect-select": {
    transform: "none !important",
  },
};

export const sortSelecMenuPropsSx = {
  PaperProps: {
    sx: {
      width: "250px",
      bgcolor: "rgba(20, 23, 36, 0.998)",
      "& .MuiMenuItem-root": {
        fontFamily: "CaslonAntique",
        fontSize: "20px",
        color: "rgb(212, 212, 212)",
        "&:hover": {
          bgcolor: "rgba(30, 35, 69, 0.8)",
        },
      },
    },
  },
  disableScrollLock: true,
};

export const sortSelectSxStyle = {
  fontFamily: "CaslonAntique",
  fontSize: "20px",
  color: "rgb(212, 212, 212)",
  border: "none",
  borderRadius: "4px",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-icon": {
    color: "rgb(212, 212, 212)",
  },
  "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "8px 15px",
  },
};

export const CustomizedCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const RadioCustom = styled(Radio)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
