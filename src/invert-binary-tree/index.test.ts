import { invertNode } from './index';
import { Node } from '../shared.types';

describe('Invert binary tree', () => {
  interface TestCase {
    in: Node;
    out: Node;
  }

  const testCases: TestCase[] = [
    {
      in: {
        value: 1,

        left: {
          value: 2,

          left: {
            value: 4,
          },

          right: {
            value: 5,
          },
        },

        right: {
          value: 3,

          left: {
            value: 6,
          },

          right: {
            value: 7,
          },
        },
      },
      out: {
        value: 1,

        left: {
          value: 3,

          left: {
            value: 7,
          },

          right: {
            value: 6,
          },
        },

        right: {
          value: 2,

          left: {
            value: 5,
          },

          right: {
            value: 4,
          },
        },
      },
    },
  ];

  testCases.forEach((testCase, index) => {
    it(`should invert binary tree - #${index}`, () => {
      const result = invertNode(testCase.in);

      expect(result).toEqual(testCase.out);
    });
  });
});
