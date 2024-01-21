import React from "react";

const BrandsWineItem = ( {name, price, imageUrl, location} ) => {
    return (
        <div className="wine-item">
            <div>
                <img className="wine-img" src={imageUrl} alt={name}/>
            </div>

            <div className="item-info">
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h3>{price}</h3>
            </div>
        </div>
    );
};

export default BrandsWineItem;