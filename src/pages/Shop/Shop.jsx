import { useState } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";

import mockwines from "./data";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import WineCard from "../../components/wineCard/WineCard";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  FormGroup,
} from "@mui/material";
import "../../styles/main-style.scss";
import "../../styles/shop.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(255, 255, 255)",
    },
  },
});

const CustomizedCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const RadioCustom = styled(Radio)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const Shop = () => {
  const [sort, setSort] = useState(false);
  const [filter, setFilter] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [filters, setFilters] = useState({
    red: false,
    white: false,
    sparkling: false,
    rose: false,
  });

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
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
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <main className="shop-wrapper">
          <Parallax className="background" speed={-3} scale={[1, 1.03]}>
            <div className="background-overlay"></div>
          </Parallax>

          <div className="control-block">
            <header className="header">
              <div className="breadcrumb">
                <span>
                  <Link to={"/"}>Home</Link>
                </span>
                <span>/</span>
                <span>Shop</span>
              </div>
              <h1 className="title">Wines</h1>
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
                  <FormControl
                    onClick={(event) => event.stopPropagation()}
                    className="sort-block"
                  >
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      value={sortOption}
                      onChange={handleSortChange}
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="descending"
                        control={<RadioCustom />}
                        label="Relevance - Descending"
                        // style={{ userSelect: "none" }}
                      />
                      <FormControlLabel
                        value="ascending"
                        control={<RadioCustom />}
                        label="Relevance - Ascending"
                        // style={{ userSelect: "none" }}
                      />
                      <FormControlLabel
                        value="low"
                        control={<RadioCustom />}
                        label="Price - Low to High"
                        // style={{ userSelect: "none" }}
                      />
                      <FormControlLabel
                        value="high"
                        control={<RadioCustom />}
                        label="Price - High to Low"
                        // style={{ userSelect: "none" }}
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

                  <FormControl>
                    <FormGroup onClick={(event) => event.stopPropagation()}>
                      <FormControlLabel
                        control={
                          <CustomizedCheckbox
                            checked={filters.red}
                            onChange={handleFilterChange}
                            name="red"
                          />
                        }
                        label="Red"
                        style={{ userSelect: "none" }}
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
                        style={{ userSelect: "none" }}
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
                        style={{ userSelect: "none" }}
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
                        style={{ userSelect: "none" }}
                      />
                    </FormGroup>
                  </FormControl>
                </div>
              </aside>
            </section>
          </div>
          <article className="shop-main">
            {filteredAndSortedWines.length > 0 ? (
              filteredAndSortedWines.map((wine) => (
                <WineCard key={wine.id} wine={wine} />
              ))
            ) : (
              <p>No products found for the selected filters.</p>
            )}
          </article>
        </main>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default Shop;
