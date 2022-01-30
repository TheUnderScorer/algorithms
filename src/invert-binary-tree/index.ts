import { Node } from '../shared.types';

export function invertNode(node?: Node) {
  if (!node) {
    return node;
  }

  const tmpNode = node.left;

  invertNode(node.left);
  invertNode(node.right);

  node.left = node.right;
  node.right = tmpNode;

  return node;
}
