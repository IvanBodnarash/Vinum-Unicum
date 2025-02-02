import { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";

import mockwines from "./data";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import WineCard from "../../components/wineCard/WineCard";
import {
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  RadioGroup,
  FormGroup,
  Box,
  Slider,
} from "@mui/material";
import "../../styles/main-style.scss";
import "./Shop.scss";

// TODO:
// - Fonts
// - Wrapping into separete components filters
// - Adding Sections for sorting
// - Changing wine card components
// - Changing product page
// - Adding data to wines data file

import { CustomizedCheckbox, RadioCustom } from "../../utils/muiConfig";

const Shop = () => {
  const [sort, setSort] = useState(false);
  const [filter, setFilter] = useState(false);
  const [price, setPrice] = useState(false);

  const [sortOption, setSortOption] = useState("all");
  const [filters, setFilters] = useState({
    red: false,
    white: false,
    sparkling: false,
    rose: false,
  });
  const [priceRange, setPriceRange] = useState([0, 50000]);
  // const [age, setAge] = useState("sort");

  // useEffect(() => {
  //   // Відновити стилі при закритті меню
  //   return () => {
  //     document.body.style.paddingRight = "0 !important";
  //     document.body.style.overflow = "visible !important";
  //     const rootDiv = document.getElementById("root");
  //     if (rootDiv) rootDiv.removeAttribute("aria-hidden");
  //   };
  // }, []);

  // New sorting dropdown feature handler

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  //   console.log(event.target.value);
  // };

  //
  // const handleMenuOpen = () => {
  //   document.body.style.paddingRight = "0px";
  //   document.body.style.overflow = "visible";
  //   const rootDiv = document.getElementById("root");
  //   if (rootDiv) rootDiv.setAttribute("aria-hidden", "false");
  // };

  // Sorting and filtering

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    console.log(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [event.target.name]: event.target.checked,
    }));
  };

  const applySorting = (wines) => {
    if (!sortOption) return wines;
    switch (sortOption) {
      case "ascending":
        return wines.sort((a, b) => a.relevance - b.relevance);
      case "descending":
        return wines.sort((a, b) => b.relevance - a.relevance);
      case "low":
        return wines.sort((a, b) => a.price - b.price);
      case "high":
        return wines.sort((a, b) => b.price - a.price);
      default:
        return wines;
    }
  };

  const applyFilters = (wines) => {
    const activeFilters = Object.keys(filters).filter((key) => filters[key]);
    if (activeFilters.length === 0) return wines;
    return mockwines.filter((wine) => activeFilters.includes(wine.type));
  };

  const filteredAndSortedWines = applySorting(applyFilters([...mockwines]));

  return (
    <main className="shop-wrapper">
      <Parallax className="background" speed={-3} scale={[1, 1.03]}>
        <div className="background-overlay"></div>
      </Parallax>

      <div className="control-block">
        <header className="header">
          <div className="breadcrumb">
            <span>
              <NavLink to="/">Home</NavLink>
            </span>
            <span>/</span>
            <span>Shop</span>
          </div>
          <h1 className="title">Our Wines</h1>
        </header>

        <section className="shop-container">
          <aside className="shop-aside">
            <div
              className={`sort ${sort ? "expanded" : ""}`}
              onClick={() => setSort(!sort)}
            >
              <header>
                <h3>Sort by:</h3>
                {!sort ? (
                  <AiOutlinePlus size={24} />
                ) : (
                  <AiOutlineMinus size={24} />
                )}
              </header>
              <FormControl onClick={(event) => event.stopPropagation()}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={sortOption}
                  onChange={handleSortChange}
                  name="radio-buttons-group"
                  sx={{
                    "& .MuiTypography-root": {
                      fontFamily: "CaslonAntique",
                      fontSize: "1.2rem",
                    },
                  }}
                >
                  <FormControlLabel
                    value="descending"
                    control={<RadioCustom />}
                    label="Relevance - Descending"
                    className="font-class"
                  />
                  <FormControlLabel
                    value="ascending"
                    control={<RadioCustom />}
                    label=">Relevance - Ascending"
                  />
                  <FormControlLabel
                    value="low"
                    control={<RadioCustom />}
                    label="Price - Low to High"
                  />
                  <FormControlLabel
                    value="high"
                    control={<RadioCustom />}
                    label="Price - High to Low"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div
              className={`filter ${filter ? "expanded" : ""}`}
              onClick={() => setFilter(!filter)}
            >
              <header>
                <h3>Filter by:</h3>
                {!filter ? (
                  <AiOutlinePlus size={24} />
                ) : (
                  <AiOutlineMinus size={24} />
                )}
              </header>

              <FormControl
                onClick={(event) => event.stopPropagation()}
                sx={{
                  "& .MuiTypography-root": {
                    fontFamily: "CaslonAntique",
                    fontSize: "1.2rem",
                  },
                }}
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <CustomizedCheckbox
                        checked={filters.red}
                        onChange={handleFilterChange}
                        name="red"
                      />
                    }
                    label="Red"
                  />
                  <FormControlLabel
                    control={
                      <CustomizedCheckbox
                        checked={filters.white}
                        onChange={handleFilterChange}
                        name="white"
                      />
                    }
                    label="White"
                  />
                  <FormControlLabel
                    control={
                      <CustomizedCheckbox
                        checked={filters.sparkling}
                        onChange={handleFilterChange}
                        name="sparkling"
                      />
                    }
                    label="Sparkling"
                  />
                  <FormControlLabel
                    control={
                      <CustomizedCheckbox
                        checked={filters.rose}
                        onChange={handleFilterChange}
                        name="rose"
                      />
                    }
                    label="Rose"
                  />
                </FormGroup>
              </FormControl>
            </div>
            <div
              className={`filter ${filter ? "expanded" : ""}`}
              onClick={() => setFilter(!filter)}
            >
              <header>
                <h3>Price:</h3>
                {!filter ? (
                  <AiOutlinePlus size={24} />
                ) : (
                  <AiOutlineMinus size={24} />
                )}
              </header>

              <FormControl
                onClick={(event) => event.stopPropagation()}
                sx={{
                  "& .MuiTypography-root": {
                    fontFamily: "CaslonAntique",
                    fontSize: "1.2rem",
                  },
                }}
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <CustomizedCheckbox
                        checked={filters.red}
                        onChange={handleFilterChange}
                        name="red"
                      />
                    }
                    label="Red"
                  />
                  <FormControlLabel
                    control={
                      <CustomizedCheckbox
                        checked={filters.white}
                        onChange={handleFilterChange}
                        name="white"
                      />
                    }
                    label="White"
                  />
                  <FormControlLabel
                    control={
                      <CustomizedCheckbox
                        checked={filters.sparkling}
                        onChange={handleFilterChange}
                        name="sparkling"
                      />
                    }
                    label="Sparkling"
                  />
                  <FormControlLabel
                    control={
                      <CustomizedCheckbox
                        checked={filters.rose}
                        onChange={handleFilterChange}
                        name="rose"
                      />
                    }
                    label="Rose"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </aside>
        </section>
      </div>

      <article className="shop-main">
        {/* <div>
          <hr></hr>
          Wines Wines Wines Wines
          <hr></hr>
        </div> */}

        <div className="sort-dropdown-menu">
          <span>Sort By:</span>

          {/* TODO */}
          {/* - change age to normal value */}
          {/* - colors */}
          {/* - resolve problem with scaling of entire page */}

          <FormControl
            sx={{
              width: "250px",
              border: "1px solid white",
              borderRadius: "4px",
              "& .MuiSelect-root": {
                transform: "none !important",
              },
              "& .MuiSelect-select": {
                transform: "none !important",
              },
            }}
          >
            <Select
              value={sortOption}
              onChange={handleSortChange}
              displayEmpty
              // onOpen={handleMenuOpen}
              MenuProps={{
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
              }}
              sx={{
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
                "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                  {
                    padding: "8px 15px", // Налаштування паддінгу для цього класу
                  },
              }}
            >
              <MenuItem value="all" label="All Wines">
                All Wines
              </MenuItem>
              <MenuItem value="descending" label="Relevance - Descending">
                Relevance - Descending
              </MenuItem>
              <MenuItem value="ascending" label=">Relevance - Ascending">
                Relevance - Ascending
              </MenuItem>
              <MenuItem value="low" label="Price - Low to High">
                Price - Low to High
              </MenuItem>
              <MenuItem value="high" label="Price - High to Low">
                Price - High to Low
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        {filteredAndSortedWines.length > 0 ? (
          <div className="wine-cards-container">
            {filteredAndSortedWines.map((wine) => (
              <WineCard key={wine.id} wine={wine} />
            ))}
          </div>
        ) : (
          <div className="no-products-container">
            No products found for the selected filters.
          </div>
        )}
      </article>
    </main>
  );
};

export default Shop;
