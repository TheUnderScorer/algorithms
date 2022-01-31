export class ListNode {
  val: number;

  next: ListNode | null = null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = typeof val === 'number' ? val : 0;
    this.next = next ?? null;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let currentL1: ListNode | null = l1;
  let currentL2: ListNode | null = l2;

  const resultRootNode = new ListNode();
  let currentResultNode = resultRootNode;

  let carry = 0;

  while (currentL1 || currentL2) {
    let sum = Math.floor((currentL1?.val ?? 0) + (currentL2?.val ?? 0) + carry);

    if (sum >= 10) {
      carry = sum / 10;
      sum = sum % 10;
    } else {
      carry = 0;
    }

    currentResultNode.val = sum >= 10 ? 0 : sum;

    const nextNode = new ListNode();

    currentL1 = currentL1?.next ?? null;
    currentL2 = currentL2?.next ?? null;

    if (currentL1 || currentL2) {
      currentResultNode.next = nextNode;

      currentResultNode = nextNode;
    }
  }

  if (carry > 0) {
    currentResultNode.next = new ListNode(Math.floor(carry));
  }

  return resultRootNode;
}
