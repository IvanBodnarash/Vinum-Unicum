import { v4 as uuidv4 } from "uuid";

const brandWinesData = {
  red: [
    {
      id: uuidv4(),
      name: "Doubleback 2019 Cabernet Sauvignon",
      price: 229.85,
      imageUrl:
        "https://images.vivino.com/thumbs/0mEtV7oIRBu5jVwu4QZabg_pb_600x600.png",
      location: "Washington, USA",
    },
    {
      id: uuidv4(),
      name: "Domaine Marcoux",
      price: 199.85,
      imageUrl:
        "https://images.vivino.com/thumbs/0mEtV7oIRBu5jVwu4QZabg_pb_600x600.png",
      location: "Rhône Valley, France",
    },
    {
      id: uuidv4(),
      name: "Caduceus 2019 Kitsune",
      price: 97.85,
      imageUrl:
        "https://images.vivino.com/thumbs/0mEtV7oIRBu5jVwu4QZabg_pb_600x600.png",
      location: "Arizona, USA",
    },
    {
      id: uuidv4(),
      name: "La Torre 2018 Brunello Di Montalcino",
      price: 65.85,
      imageUrl:
        "https://images.vivino.com/thumbs/0mEtV7oIRBu5jVwu4QZabg_pb_600x600.png",
      location: "Tuscany, Italy",
    },
    {
      id: uuidv4(),
      name: "Leroy Pommard Les vignots 76",
      price: 1226.85,
      imageUrl:
        "https://images.vivino.com/thumbs/0mEtV7oIRBu5jVwu4QZabg_pb_600x600.png",
      location: "Catalonia, Spain",
    },
    {
      id: uuidv4(),
      name: "Red Wine Pingus",
      price: 1407.85,
      imageUrl:
        "https://images.vivino.com/thumbs/0mEtV7oIRBu5jVwu4QZabg_pb_600x600.png",
      location: "Catalonia, Spain",
    },
    // ...more red wines
  ],
  white: [
    {
      id: uuidv4(),
      name: "Domaine Boisson 2019 'Pierre'",
      price: 399.85,
      imageUrl:
        "https://koreawinechallenge.com/wp-content/uploads/2023/08/Madam-Vueve-Point-Rully.png",
      location: "Burgundy, France",
    },
    {
      id: uuidv4(),
      name: "Domaine Boisson 2020 'Frere Et Soeur' Auxey-Duresses",
      price: 129.85,
      imageUrl:
        "https://koreawinechallenge.com/wp-content/uploads/2023/08/Madam-Vueve-Point-Rully.png",
      location: "Burgundy, France",
    },
    {
      id: uuidv4(),
      name: "Pont Neuf 2019 'Pont Marie' Blanc",
      price: 149.85,
      imageUrl:
        "https://koreawinechallenge.com/wp-content/uploads/2023/08/Madam-Vueve-Point-Rully.png",
      location: "California, USA",
    },
    {
      id: uuidv4(),
      name: "Castillo Ygay Gran Reserva 1986",
      price: 1058.75,
      imageUrl:
        "https://koreawinechallenge.com/wp-content/uploads/2023/08/Madam-Vueve-Point-Rully.png",
      location: "Valencia, Spain",
    },
    {
      id: uuidv4(),
      name: "Casa Del Bosque Chardonnay Gran Reserva",
      price: 499.85,
      imageUrl:
        "https://koreawinechallenge.com/wp-content/uploads/2023/08/Madam-Vueve-Point-Rully.png",
      location: "Chile",
    },
    // ...more white wines
  ],
  sparkling: [
    {
      id: uuidv4(),
      name: "2018 Les Vignes D’Autrefois",
      price: 599.85,
      imageUrl: "https://bluet.me/wp-content/uploads/2018/09/champ-btl-sm.png",
      location: "Champagne, France",
    },
    {
      id: uuidv4(),
      name: "Champagne Laherte Frères NV",
      price: 195.85,
      imageUrl: "https://bluet.me/wp-content/uploads/2018/09/champ-btl-sm.png",
      location: "Champagne, France",
    },
    {
      id: uuidv4(),
      name: "Champagne JL Vergnon 2015",
      price: 136.95,
      imageUrl: "https://bluet.me/wp-content/uploads/2018/09/champ-btl-sm.png",
      location: "Champagne, France",
    },
    {
      id: uuidv4(),
      name: "Laherte Frères 2018 Les Grandes'",
      price: 195.35,
      imageUrl: "https://bluet.me/wp-content/uploads/2018/09/champ-btl-sm.png",
      location: "Champagne, France",
    },
    {
      id: uuidv4(),
      name: "Champagne Suenen NV Oiry Blanc De Blancs",
      price: 144.85,
      imageUrl: "https://bluet.me/wp-content/uploads/2018/09/champ-btl-sm.png",
      location: "Champagne, France",
    },
    {
      id: uuidv4(),
      name: "Champagne Suenen NV C + C Blanc De Blancs",
      price: 599.85,
      imageUrl: "https://bluet.me/wp-content/uploads/2018/09/champ-btl-sm.png",
      location: "Champagne, France",
    },
    {
      id: uuidv4(),
      name: "Laherte Frères",
      price: 199.85,
      imageUrl: "https://bluet.me/wp-content/uploads/2018/09/champ-btl-sm.png",
      location: "Burgundy, France",
    },
    // ...more sparkling wines
  ],
  rose: [
    {
      id: uuidv4(),
      name: "Laherte Rose de Meunier",
      price: 195.55,
      imageUrl:
        "https://www.vinatis.es/36499-detail_default/champagne-armand-de-brignac-brut-gold.png",
      location: "Champagne, France",
    },
    {
      id: uuidv4(),
      name: "Champagne Armand de Brignac Rose Magnum",
      price: 995.85,
      imageUrl:
        "https://www.vinatis.es/36499-detail_default/champagne-armand-de-brignac-brut-gold.png",
      location: "Champagne, France",
    },
    {
      id: uuidv4(),
      name: "Pink Wine Peñamonte",
      price: 139.5,
      imageUrl:
        "https://www.vinatis.es/36499-detail_default/champagne-armand-de-brignac-brut-gold.png",
      location: "Castilla y León, Spain",
    },
    {
      id: uuidv4(),
      name: "Monges Reserva",
      price: 599.85,
      imageUrl:
        "https://www.vinatis.es/36499-detail_default/champagne-armand-de-brignac-brut-gold.png",
      location: "La Rioja, Spain",
    },
    {
      id: uuidv4(),
      name: "Pinot Noir Magnum",
      price: 499.85,
      imageUrl:
        "https://www.vinatis.es/36499-detail_default/champagne-armand-de-brignac-brut-gold.png",
      location: "Burgundy, France",
    },
    // ...more sparkling wines
  ],
};

export default brandWinesData;
