export default function cleanSet(set, startString) {
  const List1 = [];
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  for (const item of set) {
    if ((typeof item === 'string') && (item.startsWith(startString))) {
      List1.push(item.slice(startString.length));
    }
  }
  return List1.join('-');
}
