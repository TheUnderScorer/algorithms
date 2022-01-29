export function getFibonacciSequenceForNumber(number: number): number[] {
  if (number === 1) {
    return [1, 1];
  }

  if (number === 2) {
    return [1, 1, 2];
  }

  const stack = [1, 1, 2];

  let lastNumber = 2;

  while (number > lastNumber) {
    stack.push(stack[stack.length - 1] + stack[stack.length - 2]);

    lastNumber = stack[stack.length - 1];
  }

  return stack;
}

export function getNthFibonacci(number: number): number {
  if (number <= 2) {
    return 1;
  }

  if (number === 3) {
    return 2;
  }

  return getNthFibonacci(number - 1) + getNthFibonacci(number - 2);
}
