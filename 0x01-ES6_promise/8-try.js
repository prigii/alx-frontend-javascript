#!/usr/bin/env node
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Error: cannot divide by 0');
  } else {
    return numerator / denominator;
  }
}
