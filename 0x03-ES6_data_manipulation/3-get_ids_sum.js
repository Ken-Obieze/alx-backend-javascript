export default function getStudentIdsSum(getListStudents) {
  const Arr1 = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  return Arr1.reduce(((accumulator, Arr1) => accumulator + Arr1.id), 0);
}
