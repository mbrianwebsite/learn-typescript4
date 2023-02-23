const obj = {
  firstName: "Muhammad",
  lastName: "Brian",
  phone: "123-456-759",
  age: 24,
  gender: false,
};

const obj2: {
  firstName: string;
  lastName: string;
  phone: string;
  age: number;
  gender: boolean;
} = {
  firstName: "Muhammad",
  lastName: "Brian",
  phone: "123-456-759",
  age: 24,
  gender: false,
};

obj2.age = 34;
obj2.age = true;

obj2.name;

obj2.phone.length;

obj2.age.length;

const obj2: StudentType = {
  firstName: "Muhammad",
  lastName: "Brian",
  phone: "123-456-759",
  age: 24,
  gender: false,
};
