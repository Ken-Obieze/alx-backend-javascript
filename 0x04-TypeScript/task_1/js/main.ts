interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

const teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
};

teacher.contract = true;

const director: Directors = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "Los Angeles",
  numberOfReports: 10,
};

console.log(printTeacher({ firstName: teacher.firstName, lastName: teacher.lastName }));
console.log(new StudentClass("Bob", "Jones").displayName());

