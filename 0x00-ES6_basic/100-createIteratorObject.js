// eslint-disable-next-line no-unused-vars
export default function createIteratorObject(report) {
  const newArray = [];
  for (const ars of Object.keys(report)) {
    newArray.push(ars);
  }
  return newArray;
}
