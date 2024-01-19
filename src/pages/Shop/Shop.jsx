import { useState } from "react";
import Header from "../../components/Header";
import mockwines from "./data";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import WineCard from "../../components/wineCard/WineCard";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import "../../styles/main-style.scss";
import "../../styles/shop.scss";

const Shop = () => {
  const [sort, setSort] = useState(false);

  return (
    <>
      <Header />
      <main className="shop-wrapper">
        <header className="header">
          <div className="breadcrumb">
            <span>
              <Link to={"/home"}>Home</Link>
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
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="descending"
                    control={<Radio />}
                    label="Relevance - Descending"
                    style={{ "user-select": "none" }}
                  />
                  <FormControlLabel
                    value="ascending"
                    control={<Radio />}
                    label="Relevance - Ascending"
                    style={{ "user-select": "none" }}
                  />
                  <FormControlLabel
                    value="low"
                    control={<Radio />}
                    label="Price - Low to High"
                    style={{ "user-select": "none" }}
                  />
                  <FormControlLabel
                    value="High"
                    control={<Radio />}
                    label="Price - High to Low"
                    style={{ "user-select": "none" }}
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="sort">
              <header>
                <h3>Filter by:</h3>
                <AiOutlinePlus size={24} />
              </header>
            </div>
          </aside>
          <article className="shop-main">
            {mockwines.map((wine) => (
              <WineCard wine={wine} />
            ))}
          </article>
        </section>
      </main>
    </>
  );
};

export default Shop;
