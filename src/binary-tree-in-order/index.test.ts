import { Node } from '../shared.types';
import {
  binaryTreeInOrderIterative,
  binaryTreeInOrderRecursive,
} from './index';

describe('Binary tree in order', () => {
  interface TestCase {
    in: Node;
    out: number[];
  }

  const testCases: TestCase[] = [
    {
      in: {
        value: 1,

        left: {
          value: 2,
        },

        right: {
          value: 2,
        },
      },
      out: [2, 1, 2],
    },
    {
      in: {
        value: 2,

        left: {
          value: 7,

          left: {
            value: 2,
          },

          right: {
            value: 6,

            left: {
              value: 5,
            },

            right: {
              value: 11,
            },
          },
        },

        right: {
          value: 5,

          right: {
            value: 9,
          },

          left: {
            value: 4,
          },
        },
      },
      out: [2, 7, 5, 6, 11, 2, 4, 5, 9],
    },
  ];

  testCases.forEach((testCase, index) => {
    it(`should return order of binary tree - recursive - #${index}`, () => {
      expect(binaryTreeInOrderRecursive(testCase.in)).toEqual(testCase.out);
    });

    it(`should return order of binary tree - iterative - #${index}`, () => {
      expect(binaryTreeInOrderIterative(testCase.in)).toEqual(testCase.out);
    });
  });
});
