const specialCapitalizationMap = {
  us: "USA",
  nz: "New Zealand",
};

const specialLowerCaseMap = {
  USA: "us",
  "New Zealand": "nz",
  Chile: "other",
  Australia: "other",
};

export const capitalizeFirstLetter = (str) => {
  if (specialCapitalizationMap[str]) {
    return specialCapitalizationMap[str];
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const mapCountryToFilterValue = (str) => {
  return specialLowerCaseMap[str] || str.toLowerCase();
};

export const sortingOptions = [
  {
    value: "all",
    label: "All Wines",
  },
  {
    value: "descending",
    label: "Relevance - Descending",
  },
  {
    value: "ascending",
    label: "Relevance - Ascending",
  },
  {
    value: "low",
    label: "Price - Low to High",
  },
  {
    value: "high",
    label: "Price - High to Low",
  },
];

