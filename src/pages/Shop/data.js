import { v4 as uuidv4 } from "uuid";

const mockwines = [
  {
    id: uuidv4(),
    name: "Cabernet Sauvignon",
    price: 30.99,
    type: "red",
    relevance: 80,
    imageLink:
      "https://line39wines.com/cdn/shop/products/Line39_19Cab.png?v=1692278225&width=1500",
    location: "California, USA",
    description:
      "A rich and full-bodied red wine with notes of blackcurrant and cedar.",
    varietal: "Pinot Grigio",
    "Alcohol/Vol": "8%",
    size: "750ml",
    "Sugar Content": "17 g/l",
  },
  {
    id: uuidv4(),
    name: "Chardonnay",
    price: 25.49,
    type: "white",
    relevance: 85,
    imageLink:
      "https://freshvinewine.com/content/productimage/1_CHARDONNAY_SLIDER-min.png",
    location: "Burgundy, France",
    description:
      "A crisp and elegant white wine with flavors of green apple and citrus.",
    varietal: "Pinot Grigio",
    "Alcohol/Vol": "8%",
    size: "750ml",
    "Sugar Content": "17 g/l",
  },
  {
    id: uuidv4(),
    name: "Merlot",
    price: 22.99,
    type: "red",
    relevance: 90,
    imageLink:
      "https://www.jeffersonvineyards.com/assets/images/products/pictures/OUTSHINERY-Jefferson-Merlot-2022.png",
    location: "Tuscany, Italy",
    description:
      "A smooth and velvety red wine with hints of plum and chocolate.",
    varietal: "Pinot Grigio",
    "Alcohol/Vol": "8%",
    size: "750ml",
    "Sugar Content": "17 g/l",
  },
  {
    id: uuidv4(),
    name: "Pinot Noir",
    price: 35.75,
    type: "red",
    relevance: 75,
    imageLink:
      "https://www.maset.com/cdnassets/products/red-wines/lg/bottle/pinot-noir-lg-1.png",
    location: "Oregon, USA",
    description:
      "An elegant and delicate red wine with flavors of cherry and earth.",
    varietal: "Pinot Grigio",
    "Alcohol/Vol": "8%",
    size: "750ml",
    "Sugar Content": "17 g/l",
  },
  {
    id: uuidv4(),
    name: "Sauvignon Blanc",
    price: 27.5,
    type: "white",
    relevance: 80,
    imageLink:
      "https://www.sauvignonjohn.com/cdn/shop/products/image_65e4f397-1371-472c-a123-075ddd391ca0_1200x1200.png?v=1661873388",
    location: "Marlborough, New Zealand",
    description:
      "A vibrant and refreshing white wine with tropical fruit and herbal notes.",
    Varietal: "Pinot Grigio",
    "Alcohol/Vol": "8%",
    Size: "750ml",
    "Sugar Content": "17 g/l",
  },
  {
    id: uuidv4(),
    name: "Chateau Latour",
    price: 84.75,
    type: "red",
    relevance: 95,
    imageLink:
      "https://www.12bouteilles.com/10414-medium_default/chateau-latour-2008.jpg",
    location: "Bordeaux, France",
    description:
      "This wine is one of the most sought after and famous because it is produced from the best vineyards of Enclos, the incomparable historical terroir around Château Latour. Up to 4 grape varieties can be used in the composition of thisPauillac wine, Cabernet Sauvignon, Merlot, Cabernet Franc et Petit Verdot.",
    varietal: "Pinot Grigio",
    "Alcohol/Vol": "8%",
    size: "750ml",
    "Sugar Content": "17 g/l",
  },
  {
    id: uuidv4(),
    name: "Amarone Della Valpolicella",
    price: 27.5,
    type: "red",
    relevance: 80,
    imageLink:
      "https://astoriavinos.es/wp-content/uploads/2020/07/amarone-della-valpolicella-d-o-c-g-astoria-tinto.png",
    location: "Valpolicella, Italy",
    description:
      "A vibrant and refreshing white wine with tropical fruit and herbal notes.",
    varietal: "Pinot Grigio",
    "Alcohol/Vol": "8%",
    Size: "750ml",
    "Sugar Content": "17 g/l",
  },
];

export default mockwines;
