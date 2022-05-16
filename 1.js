// 1. Calculate Mean and Median for each sub array

const calcMean = (number) => {
  return number.reduce((a, b) => a + b) / number.length;
};

const calcMedian = (number) => {
  if (number.length % 2 === 0) {
    return (number[number.length / 2 - 1] + number[number.length / 2]) / 2;
  } else {
    return number[Math.floor(number.length / 2)];
  }
};

const calcMeanMedianUnsorted = (array) => {
  const obj = {};
  let key = 1;
  for (let i = 0; i < array.length; i++) {
    if (!(array[i] < array[i - 1])) {
      if (!obj.hasOwnProperty(key)) {
        obj[key] = Array.of(array[i]);
      } else {
        obj[key].push(array[i]);
      }
    } else if (array[i] < array[i - 1]) {
      key++;
      if (!obj.hasOwnProperty(key)) {
        obj[key] = Array.of(array[i]);
      } else {
        obj[key].push(array[i]);
      }
    }
  }

  const resultArray = [];
  for (let j = 1; j <= key; j++) {
    const resultObj = { mean: 0, median: 0 };
    resultObj.mean = calcMean(obj[j]);
    resultObj.median = calcMedian(obj[j]);
    resultArray.push(resultObj);
  }
  return resultArray;
};

const array = [3, 4, 6, 17, 25, 21, 23];
console.log(calcMeanMedianUnsorted(array));
