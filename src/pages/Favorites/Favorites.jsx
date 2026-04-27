import { Parallax } from "react-scroll-parallax";
import { useShop } from "../../context/ShopContext"
import { NavLink } from "react-router-dom";

import "./Favorites.scss"
import WineCard from "../../components/wineCard/WineCard";

export default function Favorites() {
  const { state } = useShop();
  const favoriteItems = state.favorites;

  console.log(favoriteItems);

  return (
    <main className="favorites-wrapper">
      <Parallax className="background" speed={-3} scale={[1, 1.03]}>
        <div className="background-overlay"></div>
      </Parallax>

      <div className="favorites-main">
        <header className="header">
          <div className="breadcrumb">
            <span>
              <NavLink to="/">Home</NavLink>
            </span>
            <span>/</span>
            <span>Favorites</span>
          </div>
        </header>

        <div className="wine-cards-container">
          {favoriteItems.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </div>
      </div>
    </main>
  )
}
