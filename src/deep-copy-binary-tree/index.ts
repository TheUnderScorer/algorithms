import { Node } from '../shared.types';

export function deepCopyNode(node: Node): Node {
  const stack: Node[] = [];

  const seenNodes = new WeakSet<Node>();

  let root: Node = {
    value: node.value,
    left: node.left,
    right: node.right,
  };
  let currentNode: Node | undefined = root;

  while (currentNode) {
    if (seenNodes.has(currentNode)) {
      throw new Error('Cycle detected');
    } else {
      seenNodes.add(currentNode);
    }

    if (currentNode.left) {
      currentNode.left = {
        value: currentNode.left.value,
        left: currentNode.left.left,
        right: currentNode.left.right,
      };

      stack.push(currentNode.left);
    }

    if (currentNode.right) {
      currentNode.right = {
        value: currentNode.right.value,
        left: currentNode.right.left,
        right: currentNode.right.right,
      };

      stack.push(currentNode.right);
    }

    currentNode = stack.pop();
  }

  return root;
}
