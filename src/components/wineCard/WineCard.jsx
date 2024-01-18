import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import "../../styles/shop.scss";

const WineCard = ({ wine }) => {
  const [saved, setSaved] = useState(false);

  return (
    // simple card can be improved
    <div className="sample-card">
      <div onClick={() => setSaved(!saved)}>
        {!saved ? (
          <GoHeart size={24} className="heart" />
        ) : (
          <GoHeartFill size={24} className="heart" />
        )}
      </div>
      <img src={wine.imageLink} alt="wine-example" />
      <div className="info">
        <h4>{wine.name}</h4>
        <h4>{wine.location}</h4>
        <span style={{ fontWeight: "bold" }}>${wine.price} CAD</span>
      </div>
    </div>
  );
};

export default WineCard;
