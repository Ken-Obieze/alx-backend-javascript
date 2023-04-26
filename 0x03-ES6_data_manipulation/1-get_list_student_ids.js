export default function getListStudentIds(obj) {
  const Arr1 = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  const map1 = Arr1.map((element) => element.id);
  if (Array.isArray(obj)) {
    return map1;
  }
  return [];
}
