export const capitalizeFirstLetter = (str) => {
  if (str === "us") {
    return "USA";
  }
  if (str === "nz") {
    return "New Zeeland";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const toLowerCase = (str) => {
  console.log(str);
  if (str === "USA") {
    return "us";
  }
  if (str === "New Zeeland") {
    return "nz";
  }
  if (str === "Chile" || str === "Australia") {
    return "other";
  }
  return str.toLowerCase();
};