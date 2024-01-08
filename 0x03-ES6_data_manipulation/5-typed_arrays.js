export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create an ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array view on the ArrayBuffer
  const int8Array = new Int8Array(buffer);

  // Set the value at the specified position
  int8Array[position] = value;

  // Create a DataView on the ArrayBuffer for the desired output format
  const dataView = new DataView(buffer);

  return dataView;
}

