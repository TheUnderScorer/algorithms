export function largestRectangleArea(heights: number[]): number {
  let largestUnits = 0;

  const stack: number[] = [];

  const heightsCopy = [...heights, 0];

  for (let index = 0; index < heightsCopy.length; index++) {
    const value = heightsCopy[index];

    while (stack.length && heightsCopy[stack[stack.length - 1]] > value) {
      const height = heightsCopy[stack.pop() as number];

      let length = index;

      if (stack.length) {
        length = index - stack[stack.length - 1] - 1;
      }

      largestUnits = Math.max(largestUnits, height * length);
    }

    stack.push(index);
  }

  return largestUnits;
}
