export default function getStudentsByLocation(getListStudents, city) {
  const Arr1 = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  return Arr1.filter((Arr1) => Arr1.location === city);
}
