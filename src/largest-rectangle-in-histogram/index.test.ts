import { largestRectangleArea } from '.';

describe('Largest rectangle in histogram', () => {
  interface TestCase {
    histogram: number[];
    expected: number;
  }

  const testCases: TestCase[] = [
    {
      histogram: [2, 4],
      expected: 4,
    },
    {
      histogram: [2, 1, 5, 6, 2, 3],
      expected: 10,
    },
  ];

  testCases.forEach(({ histogram, expected }, index) => {
    it(`should return the largest rectangle in histogram - # ${index}`, () => {
      expect(largestRectangleArea(histogram)).toEqual(expected);
    });
  });
});
