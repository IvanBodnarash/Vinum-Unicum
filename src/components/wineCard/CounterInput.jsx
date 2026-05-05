import { useEffect, useState } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import { IoAdd, IoRemove } from "react-icons/io5";

const CounterInput = ({
  min = 1,
  max = 99,
  value,
  onChange,
  variant = "default",
}) => {
  const [count, setCount] = useState(value ?? min);
  const isCompact = variant === "compact";

  const buttonSize = isCompact ? 24 : 35;
  const inputWidth = isCompact ? 28 : 45;
  const controlHeight = isCompact ? 24 : 28;
  const fontSize = isCompact ? 12 : 14;

  useEffect(() => {
    setCount(value ?? min);
  }, [value, min]);

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

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        height: `${controlHeight}px`,
      }}
    >
      <IconButton
        onClick={handleDecrement}
        size="small"
        disabled={count <= min}
        sx={{
          width: `${buttonSize}px`,
          height: `${controlHeight}px`,
          padding: 0,
          border: "1px solid #ccc",
          borderRadius: "2px 0 0 2px",
          color: "white",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "#6c6c6c",
          },
          "&:disabled": {
            backgroundColor: "#8d8d8d",
            color: "white",
          },
        }}
      >
        <IoRemove size={isCompact ? 12 : 16} />
      </IconButton>

      <TextField
        value={count}
        type="number"
        size="small"
        variant="outlined"
        inputProps={{
          readOnly: true,
          min,
          max,
        }}
        sx={{
          width: `${inputWidth}px`,

          "& .MuiOutlinedInput-root": {
            height: `${controlHeight}px`,
            padding: 0,
            border: "1px solid #ccc",
            borderLeft: "none",
            borderRight: "none",
            borderRadius: "0",
          },

          "& .MuiOutlinedInput-input": {
            padding: 0,
            textAlign: "center",
            color: "white",
            fontSize: `${fontSize}px`,
            lineHeight: `${controlHeight}px`,
            cursor: "default",
            pointerEvents: "none",
          },

          "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
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
          width: `${buttonSize}px`,
          height: `${controlHeight}px`,
          minWidth: `${buttonSize}px`,
          padding: 0,
          border: "1px solid #ccc",
          borderRadius: "2px",
          color: "white",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "#6c6c6c",
          },
          "&:disabled": {
            opacity: 0.7,
            backgroundColor: "#535353",
            color: "white",
          },
        }}
      >
        <IoAdd size={isCompact ? 12 : 16} />
      </IconButton>
    </Box>
  );
};

export default CounterInput;