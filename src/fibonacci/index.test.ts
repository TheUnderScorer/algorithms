import { getFibonacciSequenceForNumber, getNthFibonacci } from './index';

describe('getFibonacciSequenceForNumber', () => {
  interface TestCase {
    number: number;
    expectedSequence: number[];
  }

  const testCases: TestCase[] = [
    {
      number: 2,
      expectedSequence: [1, 1, 2],
    },
    {
      number: 5,
      expectedSequence: [1, 1, 2, 3, 5],
    },
    {
      number: 377,
      expectedSequence: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377],
    },
  ];

  testCases.forEach((testCase, index) => {
    it(`should return numbers from fibonacci sequence for given number - #${index}`, () => {
      expect(getFibonacciSequenceForNumber(testCase.number)).toEqual(
        testCase.expectedSequence,
      );
    });
  });
});

describe('getNthFibonacci', () => {
  interface TestCase {
    number: number;
    expectedResult: number;
  }

  const testCases: TestCase[] = [
    {
      number: 2,
      expectedResult: 1,
    },
    {
      number: 3,
      expectedResult: 2,
    },
    {
      number: 5,
      expectedResult: 5,
    },
    {
      number: 12,
      expectedResult: 144,
    },
    {
      number: 14,
      expectedResult: 377,
    },
  ];

  testCases.forEach((testCase, index) => {
    it(`should return correct number from ${testCase.number} fibonacci sequence - #${index}`, () => {
      expect(getNthFibonacci(testCase.number)).toEqual(testCase.expectedResult);
    });
  });
});
