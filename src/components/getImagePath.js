// this function requires category and name of chair
const getImagePath = (category, chairName) => {
  if (!category || !chairName) {
    window.history.back();
    return;
  }

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
