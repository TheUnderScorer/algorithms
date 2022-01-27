import { romanToInteger } from './index';

describe('Roman to integer', () => {
  interface TestCase {
    from: string;
    to: number;
  }

  const testCases: TestCase[] = [
    {
      from: 'I',
      to: 1,
    },
    {
      from: 'II',
      to: 2,
    },
    {
      from: 'IV',
      to: 4,
    },
    {
      from: 'V',
      to: 5,
    },
    {
      from: 'IX',
      to: 9,
    },
    {
      from: 'X',
      to: 10,
    },
    {
      from: 'LVIII',
      to: 58,
    },
    {
      from: 'XL',
      to: 40,
    },
    {
      from: 'XC',
      to: 90,
    },
    {
      from: 'XXC',
      to: 100,
    },
    {
      from: 'MCM',
      to: 1900,
    },
    {
      from: 'MCMXCIV',
      to: 1994,
    },
  ];

  testCases.forEach((testCase, index) => {
    it(`should convert roman to integer - #${index}`, () => {
      expect(romanToInteger(testCase.from)).toEqual(testCase.to);
    });
  });
});
