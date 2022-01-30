import { last } from '@fxts/core';

export function largestRectangleArea(heights: number[]): number {
  let largestUnits = 0;

  const stack: number[] = [];

  const heightsCopy = [...heights, 0];

  for (let index = 0; index < heightsCopy.length; index++) {
    const value = heightsCopy[index];

    while (stack.length && heightsCopy[Number(last(stack))] > value) {
      const height = heightsCopy[Number(stack.pop())];

      let length = index;

      if (stack.length) {
        const lastStackEntry = last(stack);

        length = index - Number(lastStackEntry) - 1;
      }

      largestUnits = Math.max(largestUnits, height * length);
    }

    stack.push(index);
  }

  return largestUnits;
}
