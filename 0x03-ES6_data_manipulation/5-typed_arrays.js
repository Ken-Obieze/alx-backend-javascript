export default function createInt8TypedArray(length, position, value) {
  if (position > length) {
    throw Error('Position outside range');
  }
  const tmpData = new ArrayBuffer(length);
  const dView = new DataView(tmpData);
  dView.setInt8(position, value);
  return dView;
}
