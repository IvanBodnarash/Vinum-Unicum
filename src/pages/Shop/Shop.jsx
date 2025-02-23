import { useState } from "react";
import { Parallax } from "react-scroll-parallax";

import mockwines from "../../data/data";
import { NavLink } from "react-router-dom";
import WineCard from "../../components/wineCard/WineCard";
import {
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";

import {
  formControlSxStyle,
  sortSelecMenuPropsSx,
  sortSelectSxStyle,
} from "../../utils/muiConfig";
import "../../styles/main-style.scss";
import "./Shop.scss";

import { mapCountryToFilterValue, sortingOptions } from "../../utils/utils";
import {
  foodPairingCategoriesMap,
  grapeVarietyMap,
  tasteCategoriesMap,
  yearCategoriesMap,
} from "../../data/filtersMaps";
import FilterCategoryComponent from "../../components/shop/FilterCategoryComponent";
import { useSearch } from "../../context/SearchContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [openedFilter, setOpenedFilter] = useState(null);

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
  const initializeMappingFilterState = (map) =>
    Object.keys(map).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});

  const [grapeVariety, setGrapeVariety] = useState(
    initializeMappingFilterState(grapeVarietyMap)
  );
  const [tasteCategory, setTasteCategory] = useState(
    initializeMappingFilterState(tasteCategoriesMap)
  );
  const [foodPairing, setFoodPairing] = useState(
    initializeMappingFilterState(foodPairingCategoriesMap)
  );
  const [year, setYear] = useState(
    initializeMappingFilterState(yearCategoriesMap)
  );

  const { state, dispatch } = useSearch();
  const [inputValue, setInputValue] = useState(state.query);

  const handleSearch = (e) => {
    const value = e.target.value;
    setInputValue(value);
    dispatch({ type: "SET_QUERY", payload: value });
  };

  const handleSearchCancel = () => {
    dispatch({ type: "RESET_QUERY" });
    setInputValue("");
  };

  // Sorting and filtering

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    console.log(event.target.value);
  };

  const handleFilterExpand = (someFilter) => {
    setOpenedFilter(openedFilter === someFilter ? null : someFilter);
  };

  const handleFilterUpdate = (setFilterState) => (event) => {
    setFilterState((prevFilters) => ({
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
    const selectedVarieties = activeVariety.map((key) => grapeVarietyMap[key]);
    const activeTasteCategory = Object.keys(tasteCategory).filter(
      (key) => tasteCategory[key]
    );
    const selectedTasteCategories = activeTasteCategory.map(
      (key) => tasteCategoriesMap[key]
    );
    const activeFoodPairing = Object.keys(foodPairing).filter(
      (key) => foodPairing[key]
    );
    const selectedFoodPairings = activeFoodPairing.map(
      (key) => foodPairingCategoriesMap[key]
    );
    const activeYear = Object.keys(year).filter((key) => year[key]);

    let filteredWines = wines;

    if (activeFilters.length > 0) {
      filteredWines = filteredWines.filter((wine) =>
        activeFilters.includes(wine.type)
      );
    }

    if (activeCountry.length > 0) {
      filteredWines = filteredWines.filter((wine) => {
        return activeCountry.includes(mapCountryToFilterValue(wine.country));
      });
    }

    if (activeVariety.length > 0) {
      filteredWines = filteredWines.filter((wine) => {
        return selectedVarieties.includes(wine.grapeVariety);
      });
    }

    if (activeTasteCategory.length > 0) {
      filteredWines = filteredWines.filter((wine) => {
        return selectedTasteCategories.includes(wine.tasteCategory);
      });
    }

    if (activeFoodPairing.length > 0) {
      filteredWines = filteredWines.filter((wine) => {
        return selectedFoodPairings.includes(wine.foodPairing);
      });
    }

    if (activeYear.length > 0) {
      filteredWines = filteredWines.filter((wine) => {
        const wineYear = wine.year;
        return activeYear.some((category) => {
          if (category === "recent") return wineYear >= 2020;
          if (category === "modern")
            return wineYear >= 2010 && wineYear <= 2019;
          if (category === "aged") return wineYear >= 1990 && wineYear <= 2009;
          if (category === "vintage") return wineYear < 1990;
          return false;
        });
      });
    }

    if (priceRange && priceRange.length === 2) {
      filteredWines = filteredWines.filter(
        (wine) => wine.price >= priceRange[0] && wine.price <= priceRange[1]
      );
    }

    filteredWines = filteredWines.filter((wine) =>
      wine.name.toLowerCase().includes(state.query.toLowerCase())
    );

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
            <FilterCategoryComponent
              className="sort"
              openedFilter={openedFilter}
              filter="sort"
              sortOption={sortOption}
              handleSortChange={handleSortChange}
              handleFilterExpand={handleFilterExpand}
              selectedFilterName="Sort By"
            />
            <FilterCategoryComponent
              className="price"
              openedFilter={openedFilter}
              filter="price"
              handleFilterExpand={handleFilterExpand}
              priceRange={priceRange}
              handlePriceChange={handlePriceChange}
              setPriceRange={setPriceRange}
              selectedFilterName="Price"
              min={10}
              max={35000}
            />
            <FilterCategoryComponent
              className="filter"
              openedFilter={openedFilter}
              filter="filter"
              handleFilterExpand={handleFilterExpand}
              handleFilterUpdate={handleFilterUpdate(setFilters)}
              selectedFilterState={filters}
              selectedFilterName="Type"
            />
            <FilterCategoryComponent
              className="country"
              openedFilter={openedFilter}
              filter="country"
              handleFilterExpand={handleFilterExpand}
              handleFilterUpdate={handleFilterUpdate(setCountry)}
              selectedFilterState={country}
              selectedFilterName="Country"
            />
            <FilterCategoryComponent
              className="grape-variety"
              openedFilter={openedFilter}
              filter="grapeVariety"
              handleFilterExpand={handleFilterExpand}
              handleFilterUpdate={handleFilterUpdate(setGrapeVariety)}
              selectedFilterState={grapeVariety}
              selectedFilterName="Grape Variety"
              map={grapeVarietyMap}
            />
            <FilterCategoryComponent
              className="taste-category"
              openedFilter={openedFilter}
              filter="tasteCategory"
              handleFilterExpand={handleFilterExpand}
              handleFilterUpdate={handleFilterUpdate(setTasteCategory)}
              selectedFilterState={tasteCategory}
              selectedFilterName="Taste Category"
              map={tasteCategoriesMap}
            />
            <FilterCategoryComponent
              className="food-pairing"
              openedFilter={openedFilter}
              filter="foodPairing"
              handleFilterExpand={handleFilterExpand}
              handleFilterUpdate={handleFilterUpdate(setFoodPairing)}
              selectedFilterState={foodPairing}
              selectedFilterName="Food Pairing"
              map={foodPairingCategoriesMap}
            />
            <FilterCategoryComponent
              className="year"
              openedFilter={openedFilter}
              filter="year"
              handleFilterExpand={handleFilterExpand}
              handleFilterUpdate={handleFilterUpdate(setYear)}
              selectedFilterState={year}
              selectedFilterName="Harvesting Year"
              map={yearCategoriesMap}
            />
          </aside>
        </section>
      </div>

      <article className="shop-main">
        <div className="sort-search-container">
          <div className="sort-dropdown-menu">
            <span>Sort By:</span>

            {/* TODO */}
            {/* - change age to normal value */}
            {/* - colors */}
            {/* - resolve problem with scaling of entire page */}

            <FormControl sx={formControlSxStyle}>
              <Select
                value={sortOption}
                onChange={handleSortChange}
                displayEmpty
                // onOpen={handleMenuOpen}
                MenuProps={sortSelecMenuPropsSx}
                sx={sortSelectSxStyle}
              >
                {sortingOptions.map((item, index) => (
                  <MenuItem key={index} value={item.value} label={item.label}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="search-section">
            <span>Search</span>
            <input
              type="text"
              placeholder="Search"
              value={inputValue}
              onChange={handleSearch}
              autoComplete="off"
            />
            <button onClick={handleSearchCancel}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>

        <div className="search-request">
          {state.query && <p>Results for "{state.query}"</p>}
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
