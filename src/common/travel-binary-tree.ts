import { Node } from '../shared.types';

export interface BinaryTreeVisitorContext {
  path: string;
}

export type BinaryTreeVisitor = (
  node: Node,
  ctx: BinaryTreeVisitorContext,
) => boolean | void;

export function travelBinaryTree(
  node: Node,
  visitor: BinaryTreeVisitor,
  path = '',
) {
  visitor(node, { path });

  const appendToPath = (value: string) =>
    path ? path.concat(value) : value.replace('.', '');

  if (
    node.left &&
    travelBinaryTree(node.left, visitor, appendToPath('.left'))
  ) {
    return;
  }

  if (
    node.right &&
    travelBinaryTree(node.right, visitor, appendToPath('.right'))
  ) {
    return;
  }
}
