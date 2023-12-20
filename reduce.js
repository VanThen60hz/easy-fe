const numberList = [1, 2, 3, 4, 3, 5, 2, 4, 3, 324, 5, 3, 4, 3, -1, 6];

const findMinNumber = (numberList) => {
  return numberList.reduce((minNumber, number) => {
    return minNumber > number ? number : minNumber;
  }, numberList[0]);
};

console.log(findMinNumber(numberList));

const findMaxEvenNumber = (numberList) => {
  return numberList.reduce((maxEvenNumber, number) => {
    return number % 2 == 0 && maxEvenNumber < number ? number : maxEvenNumber;
  }, 0);
};

console.log(findMaxEvenNumber(numberList));

const object = {
  key1: "Superman",
  key2: "Spiderman",
  key3: "Batman",
};

const objectToArray = (object) => {
  return Object.entries(object).reduce((newArray, [key, value]) => {
    newArray.push({ id: key, value: value });
    return newArray;
  }, []);
};

console.log(objectToArray(object));
