const Utilities = (() => {
  const shuffleArray = (arr) => {
    const copyArray = [...arr];
    const shuffled = [];

    for (let i = 0; i < arr.length; i++) {
      const randomIndex = Math.floor(Math.random() * Math.floor(copyArray.length));

      shuffled[shuffled.length] = copyArray.splice(randomIndex, 1)[0];
    }

    return shuffled;
  };

  const getRandomNumbers = amount => [...Array(amount)].map((item, index) => index + 1);

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const inArray = (item, array) => array.indexOf(item) !== -1;

  return {
    shuffleArray,
    getRandomNumbers,
    getRandomNumber,
    inArray,
  };
})();