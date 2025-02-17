import {
  FormControl,
  FormControlLabel,
  FormGroup,
  RadioGroup,
  Slider,
  Box,
} from "@mui/material";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  sxStyle,
  RadioCustom,
  CustomizedCheckbox,
} from "../../utils/muiConfig";
import { capitalizeFirstLetter, sortingOptions } from "../../utils/utils";

export default function FilterCategoryComponent({
  className,
  openedFilter,
  handleFilterExpand,
  handleFilterUpdate,
  selectedFilterState,
  selectedFilterName,
  priceRange,
  handlePriceChange,
  min,
  max,
  setPriceRange,
  filter,
  sortOption,
  handleSortChange,
  map,
}) {
  let content;

  if (filter === "filter" || filter === "country") {
    content = (
      <FormGroup>
        {Object.entries(selectedFilterState).map(([key, value]) => (
          <FormControlLabel
            key={key}
            control={
              <CustomizedCheckbox
                checked={value}
                onChange={handleFilterUpdate}
                name={key}
              />
            }
            label={capitalizeFirstLetter(key)}
          ></FormControlLabel>
        ))}
      </FormGroup>
    );
  } else if (filter === "price") {
    content = (
      <>
        <Box sx={{ width: "260px", marginLeft: "15px" }}>
          <Slider
            // getAriaLabel={() => "Price range"}
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={min}
            max={max}
            // getAriaValueText={valuetext}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "fit-content",
            flexDirection: "column",
          }}
        >
          <div className="price-range-display">
            <span>${priceRange[0] ? priceRange[0] : "0"}</span>
            <span>${priceRange[1] ? priceRange[1] : "0"}</span>
          </div>
          <form className="price-range-input-container">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([parseFloat(e.target.value), priceRange[1]])
              }
            />
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], parseFloat(e.target.value)])
              }
            />
          </form>
        </Box>
      </>
    );
  } else if (
    filter === "grapeVariety" ||
    filter === "tasteCategory" ||
    filter === "foodPairing" ||
    filter === "year"
  ) {
    content = (
      <FormGroup>
        {Object.entries(selectedFilterState).map(([key, value]) => (
          <FormControlLabel
            key={key}
            control={
              <CustomizedCheckbox
                checked={value}
                onChange={handleFilterUpdate}
                name={key}
              />
            }
            label={map[key]}
          />
        ))}
      </FormGroup>
    );
  } else if (filter === "sort") {
    content = (
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={sortOption}
        onChange={handleSortChange}
        name="radio-buttons-group"
        sx={sxStyle}
      >
        {sortingOptions.map((item, index) => (
          <FormControlLabel
            key={index}
            value={item.value}
            control={<RadioCustom />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    );
  }

  return (
    <div
      className={`${className} ${openedFilter === filter ? "expanded" : ""}`}
      onClick={() => handleFilterExpand(filter)}
    >
      <header>
        <h3>{selectedFilterName}:</h3>
        {openedFilter === filter ? (
          <AiOutlineMinus size={24} />
        ) : (
          <AiOutlinePlus size={24} />
        )}
      </header>
      <FormControl onClick={(event) => event.stopPropagation()} sx={sxStyle}>
        {content}
      </FormControl>
    </div>
  );
}
