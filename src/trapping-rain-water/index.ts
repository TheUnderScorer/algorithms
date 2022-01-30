export function trap(heights: number[]): number {
  let result = 0;

  const size = heights.length;

  const leftMax: number[] = [heights[0]];
  const rightMax: number[] = [];

  rightMax[size - 1] = heights[size - 1];

  for (let index = 1; index < size; index++) {
    const height = heights[index];

    leftMax[index] = Math.max(height, leftMax[index - 1]);
  }

  for (let i = size - 2; i >= 0; i--) {
    rightMax[i] = Math.max(heights[i], rightMax[i + 1]);
  }

  for (let i = 1; i < size; i++) {
    result += Math.min(leftMax[i], rightMax[i]) - heights[i];
  }

  return result;
}
