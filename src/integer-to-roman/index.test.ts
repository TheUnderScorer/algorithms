import { integerToRoman } from './index';

describe('Integer to roman', () => {
  interface TestCase {
    from: number;
    to: string;
  }

  const testCases: TestCase[] = [
    {
      from: 1,
      to: 'I',
    },
    {
      to: 'II',
      from: 2,
    },
    {
      to: 'III',
      from: 3,
    },
    {
      to: 'IV',
      from: 4,
    },
    {
      to: 'V',
      from: 5,
    },
    {
      to: 'IX',
      from: 9,
    },
    {
      to: 'X',
      from: 10,
    },
    {
      to: 'LVIII',
      from: 58,
    },
    {
      to: 'MCM',
      from: 1900,
    },
    {
      to: 'MCMXCIV',
      from: 1994,
    },
  ];

  testCases.forEach((testCase, index) => {
    it(`should convert integer to roman - #${index}`, () => {
      expect(integerToRoman(testCase.from)).toEqual(testCase.to);
    });
  });
});
