import { addTwoNumbers, ListNode } from './index';

function listNodeFromArray(nums: number[]) {
  const rootNode = new ListNode();

  let currentNode = rootNode;

  nums.forEach((num, index) => {
    currentNode.val = num;

    if (index + 1 < nums.length) {
      const next = new ListNode();

      currentNode.next = next;

      currentNode = next;
    }
  });

  return rootNode;
}

function arrayFromListNode(listNode: ListNode) {
  let currentNode: ListNode | null = listNode;

  const result: number[] = [];

  while (currentNode) {
    result.push(currentNode.val);

    currentNode = currentNode.next;
  }

  return result;
}

describe('Add two numbers in linked list', () => {
  interface TestCase {
    l1: number[];
    l2: number[];
    expectedResult: number[];
  }

  const testCases: TestCase[] = [
    {
      l1: [2, 4, 3],
      l2: [5, 6, 4],
      expectedResult: [7, 0, 8],
    },
    {
      l1: [9, 9, 9, 9, 9, 9, 9],
      l2: [9, 9, 9, 9],
      expectedResult: [8, 9, 9, 9, 0, 0, 0, 1],
    },
    {
      l1: [9],
      l2: [9],
      expectedResult: [8, 1],
    },
  ];

  testCases.forEach((testCase, index) => {
    it(`should return correct added list node - #${index}`, () => {
      const l1 = listNodeFromArray(testCase.l1);
      const l2 = listNodeFromArray(testCase.l2);

      const result = addTwoNumbers(l1, l2);

      expect(arrayFromListNode(result!)).toEqual(testCase.expectedResult);
    });
  });
});
