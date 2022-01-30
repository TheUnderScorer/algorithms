import { Node } from '../shared.types';

export function binaryTreeInOrderRecursive(node?: Node, result: number[] = []) {
  if (node) {
    binaryTreeInOrderRecursive(node.left, result);

    result.push(node.value);

    binaryTreeInOrderRecursive(node.right, result);
  }

  return result;
}

export function binaryTreeInOrderIterative(node: Node) {
  const result: number[] = [];

  const stack: Node[] = [];

  let currentNode: Node | undefined = node;

  while (currentNode || stack.length) {
    if (currentNode) {
      stack.push(currentNode);

      currentNode = currentNode.left;
    } else {
      currentNode = stack.pop();

      if (currentNode) {
        result.push(currentNode.value);
      }

      currentNode = currentNode?.right;
    }
  }

  return result;
}
