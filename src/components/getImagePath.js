// this function requires category and name of chair

const getImagePath = (category, chairName) => {
  let categoryLowerCase = category.split(" ").join("").toLowerCase();
  let newChairName = (
    chairName.toLowerCase().charAt(0).toUpperCase() +
    chairName.toLowerCase().slice(1)
  )
    .split(" ")
    .join("");
  return `images/${categoryLowerCase}/${newChairName}/images/`;
};

export default getImagePath;
