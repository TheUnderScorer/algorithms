import { Node } from '../shared.types';
import { deepCopyNode } from './index';
import { travelBinaryTree } from '../common/travel-binary-tree';
import { get } from 'lodash';

describe('Deep copy binary tree', () => {
  it.each<Node[]>([
    [
      {
        value: 1,
        left: {
          value: 2,
          left: {
            value: 3,
          },
          right: {
            value: 4,
          },
        },

        right: {
          value: 5,
          left: {
            value: 6,
          },
          right: {
            value: 7,
          },
        },
      },
    ],
  ])('should create deep copy of binary tree', (node) => {
    const copy = deepCopyNode(node);

    expect(copy).toEqual(node);
    expect(copy === node).toEqual(false);

    travelBinaryTree(node, (currentNode, ctx) => {
      const nodeCopy = ctx.path ? get(copy, ctx.path) : copy;

      expect(currentNode === nodeCopy).toEqual(false);
    });
  });
});
