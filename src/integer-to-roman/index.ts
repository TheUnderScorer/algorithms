const map = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,

  V: 5,

  IX: 9,
  X: 10,

  XL: 40,
  L: 50,

  XC: 90,
  C: 100,

  CD: 400,
  D: 500,

  CM: 900,
  M: 1000,
};

const sortedMapArray = Object.entries(map).sort((a, b) => {
  return a[1] > b[1] ? -1 : 1;
});

export function integerToRoman(number: number) {
  let remainingAmount = number;
  let result = '';

  while (remainingAmount) {
    for (let i = 0; i < sortedMapArray.length; i++) {
      const record = sortedMapArray[i];
      const [romanChar, value] = record;
      const nextRecord = sortedMapArray[i + 1];

      if (value <= remainingAmount || !nextRecord) {
        result += romanChar;

        remainingAmount -= value;

        break;
      }
    }
  }

  return result;
}
