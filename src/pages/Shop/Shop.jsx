import { useState } from "react";
import { Parallax } from "react-scroll-parallax";

import mockwines from "../../data/data";
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

import { sxStyle } from "../../utils/muiConfig";
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
import { capitalizeFirstLetter, toLowerCase } from "../../utils/utils";
import { grapeVarietyMap } from "../../data/filtersMaps";

const Shop = () => {
  const [openedFilter, setOpenedFilter] = useState({
    sort: false,
    filter: false,
    price: false,
    country: false,
    grapeVariety: false,
  });

  const [sortOption, setSortOption] = useState("all");
  const [filters, setFilters] = useState({
    red: false,
    white: false,
    sparkling: false,
    rose: false,
  });
  const [priceRange, setPriceRange] = useState([10, 35000]);
  const [country, setCountry] = useState({
    italy: false,
    spain: false,
    france: false,
    portugal: false,
    us: false,
    nz: false,
    other: false,
  });
  const [grapeVariety, setGrapeVariety] = useState(
    Object.keys(grapeVarietyMap).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {})
  );

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

  const handleFilterExpand = (someFilter) => {
    if (someFilter === "sort") {
      setOpenedFilter({ ...openedFilter, sort: !openedFilter.sort });
    } else if (someFilter === "filter") {
      setOpenedFilter({ ...openedFilter, filter: !openedFilter.filter });
    } else if (someFilter === "price") {
      setOpenedFilter({ ...openedFilter, price: !openedFilter.price });
    } else if (someFilter === "country") {
      setOpenedFilter({ ...openedFilter, country: !openedFilter.country });
    } else if (someFilter === "grapeVariety") {
      setOpenedFilter({
        ...openedFilter,
        grapeVariety: !openedFilter.grapeVariety,
      });
    }

    console.log(openedFilter);
  };

  const handleFilterChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [event.target.name]: event.target.checked,
    }));
  };

  const handleCountryChange = (event) => {
    setCountry((prevFilters) => ({
      ...prevFilters,
      [event.target.name]: event.target.checked,
    }));
  };

  const handleGrapeVarietyChange = (event) => {
    setGrapeVariety((prevFilters) => ({
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
    const activeCountry = Object.keys(country).filter((key) => country[key]);
    const activeVariety = Object.keys(grapeVariety).filter(
      (key) => grapeVariety[key]
    );

    let filteredWines = wines;

    if (activeFilters.length > 0) {
      filteredWines = filteredWines.filter((wine) =>
        activeFilters.includes(wine.type)
      );
    }

    if (activeCountry.length > 0) {
      filteredWines = filteredWines.filter((wine) => {
        return activeCountry.includes(toLowerCase(wine.country));
      });
    }

    if (activeVariety.length > 0) {
      const selectedVarieties = activeVariety.map((key) => grapeVarietyMap[key]);

      filteredWines = filteredWines.filter((wine) => {
        return selectedVarieties.includes(wine.grapeVariety);
      });
    }

    if (priceRange && priceRange.length === 2) {
      filteredWines = filteredWines.filter(
        (wine) => wine.price >= priceRange[0] && wine.price <= priceRange[1]
      );
    }

    return filteredWines;
  };

  const filteredAndSortedWines = applySorting(applyFilters([...mockwines]));

  const handlePriceChange = (event, newValue) => {
    console.log("newValue:", newValue);
    if (Array.isArray(newValue)) {
      setPriceRange(newValue);
    }
  };

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
              className={`sort ${openedFilter.sort ? "expanded" : ""}`}
              onClick={() => handleFilterExpand("sort")}
            >
              <header>
                <h3>Sort by:</h3>
                {!openedFilter.sort ? (
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
                  sx={sxStyle}
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
              className={`filter ${openedFilter.filter ? "expanded" : ""}`}
              onClick={() => handleFilterExpand("filter")}
            >
              <header>
                <h3>Type:</h3>
                {!openedFilter.filter ? (
                  <AiOutlinePlus size={24} />
                ) : (
                  <AiOutlineMinus size={24} />
                )}
              </header>

              <FormControl
                onClick={(event) => event.stopPropagation()}
                sx={sxStyle}
              >
                <FormGroup>
                  {Object.entries(filters).map(([key, value]) => (
                    <FormControlLabel
                      key={key}
                      control={
                        <CustomizedCheckbox
                          checked={value}
                          onChange={handleFilterChange}
                          name={key}
                        />
                      }
                      label={capitalizeFirstLetter(key)}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </div>
            <div
              className={`price ${openedFilter.price ? "expanded" : ""}`}
              onClick={() => handleFilterExpand("price")}
            >
              <header>
                <h3>Price:</h3>
                {!openedFilter.price ? (
                  <AiOutlinePlus size={24} />
                ) : (
                  <AiOutlineMinus size={24} />
                )}
              </header>

              <FormControl
                onClick={(event) => event.stopPropagation()}
                sx={sxStyle}
              >
                <Box sx={{ width: "260px", marginLeft: "15px" }}>
                  <Slider
                    // getAriaLabel={() => "Price range"}
                    value={priceRange}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    min={10}
                    max={35000}
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
                        setPriceRange([
                          parseFloat(e.target.value),
                          priceRange[1],
                        ])
                      }
                    />
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([
                          priceRange[0],
                          parseFloat(e.target.value),
                        ])
                      }
                    />
                  </form>
                </Box>
              </FormControl>
            </div>
            <div
              className={`country ${openedFilter.country ? "expanded" : ""}`}
              onClick={() => handleFilterExpand("country")}
            >
              <header>
                <h3>Country:</h3>
                {!openedFilter.country ? (
                  <AiOutlinePlus size={24} />
                ) : (
                  <AiOutlineMinus size={24} />
                )}
              </header>

              <FormControl
                onClick={(event) => event.stopPropagation()}
                sx={sxStyle}
              >
                <FormGroup>
                  {Object.entries(country).map(([key, value]) => (
                    <FormControlLabel
                      key={key}
                      control={
                        <CustomizedCheckbox
                          checked={value}
                          onChange={handleCountryChange}
                          name={key}
                        />
                      }
                      label={capitalizeFirstLetter(key)}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </div>
            <div
              className={`grape-variety ${
                openedFilter.grapeVariety ? "expanded" : ""
              }`}
              onClick={() => handleFilterExpand("grapeVariety")}
            >
              <header>
                <h3>Grape Variety:</h3>
                {!openedFilter.grapeVariety ? (
                  <AiOutlinePlus size={24} />
                ) : (
                  <AiOutlineMinus size={24} />
                )}
              </header>

              <FormControl
                onClick={(event) => event.stopPropagation()}
                sx={sxStyle}
              >
                <FormGroup>
                  {Object.entries(grapeVariety).map(([key, value]) => (
                    <FormControlLabel
                      key={key}
                      control={
                        <CustomizedCheckbox
                          checked={value}
                          onChange={handleGrapeVarietyChange}
                          name={key}
                        />
                      }
                      label={grapeVarietyMap[key]}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </div>
          </aside>
        </section>
      </div>

      <article className="shop-main">
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
                    padding: "8px 15px",
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
