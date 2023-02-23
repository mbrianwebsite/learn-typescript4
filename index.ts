const obj: {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
} = {
  firstName: "Muhammad",
  lastName: "Brian",
  age: 27,
  gender: "male",
};

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
}

const obj2: Person = {
  firstName: "Muhammad",
  lastName: "Brian",
  age: 27,
  gender: "male",
};

// interface always return an object
// type just only specify and can be oneliner or other type result

type PersonType = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
}[];

const obj3: PersonType = [
  {
    firstName: "Muhammad",
    lastName: "Brian",
    age: 27,
    gender: "male",
  },
];
