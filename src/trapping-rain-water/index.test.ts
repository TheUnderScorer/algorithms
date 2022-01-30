import { trap } from './index';

describe('Trapping rain water', () => {
  interface TestCase {
    elevations: number[];
    expected: number;
  }

  const testCases: TestCase[] = [
    {
      elevations: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
      expected: 6,
    },
    {
      elevations: [4, 2, 0, 3, 2, 5],
      expected: 9,
    },
  ];

  testCases.forEach((testCase, index) => {
    it(`should return correct trapped rain water - #${index}`, () => {
      expect(trap(testCase.elevations)).toEqual(testCase.expected);
    });
  });
});
