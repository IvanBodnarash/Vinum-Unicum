import { useEffect, useState } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import { IoAdd, IoRemove } from "react-icons/io5";

const CounterInput = ({ min = 1, max = 99, value, onChange }) => {
  // console.log(quantityCart);
  const [count, setCount] = useState(value || min);

  useEffect(() => {
    setCount(value);
  }, [value]);

  const handleIncrement = () => {
    if (count < max) {
      const newValue = count + 1;
      setCount(newValue);
      onChange?.(newValue);
    }
  };

  const handleDecrement = () => {
    if (count > min) {
      const newValue = count - 1;
      setCount(newValue);
      onChange?.(newValue);
    }
  };

  const handleChange = (e) => {
    let newValue = parseInt(e.target.value, 99);
    if (isNaN(newValue)) newValue = min;
    newValue = Math.max(min, Math.min(newValue, max));
    setCount(newValue);
    onChange?.(newValue);
  };


  return (
    <Box display="flex" alignItems="center">
      <IconButton
        onClick={handleDecrement}
        size="small"
        disabled={count <= min}
        sx={{
          width: "35px",
          height: "30px",
          border: "1px solid #ccc",
          borderRadius: "2px",
          color: "white",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
          "&:disabled": {
            // opacity: 0.7,
            backgroundColor: "#f9f9f9",
          },
        }}
      >
        <IoRemove />
      </IconButton>
      <TextField
        value={value}
        onChange={handleChange}
        type="number"
        size="small"
        variant="outlined"
        inputProps={{
          min: min,
          max: max,
          style: {
            textAlign: "center",
            height: "12px",
            width: "8px",
            cursor: "pointer",
            pointerEvents: "none",
          },
          readOnly: true,
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
            textAlign: "center",
          },
          "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
            {
              display: "none",
            },
          "& input[type=number]": {
            MozAppearance: "textfield",
          },
        }}
      />
      <IconButton
        onClick={handleIncrement}
        size="small"
        disabled={count >= max}
        sx={{
          width: "35px",
          height: "30px",
          border: "1px solid #ccc",
          borderRadius: "2px",
          color: "white",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
          "&:disabled": {
            opacity: 0.5,
            backgroundColor: "#f9f9f9",
          },
        }}
      >
        <IoAdd />
      </IconButton>
    </Box>
  );
};

export default CounterInput;
