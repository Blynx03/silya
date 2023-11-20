// make first letter of words capitalized
const makeItProper = (value) => {
  const temp = value.split("_");
  let newWord = [];
  if (temp.length <= 1) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  } else {
    temp.forEach((word) => {
      newWord.push(word.charAt(0).toUpperCase() + word.slice(1));
    });
    return newWord.join(" ");
  }
};

export default makeItProper;
