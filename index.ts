const arrayOfString = ["string1", "string2", "string3"];

arrayOfString.push("string4");

const arrayOfStringAndBoolean: (string | boolean)[] = [
  "string1",
  "string2",
  "string3",
];

arrayOfStringAndBoolean.push("string4");
arrayOfStringAndBoolean.push(true);

const arrayOfBooleans: boolean[] = [true, false, true];
arrayOfBooleans.push(1 === 0);
arrayOfBooleans.push(true);

const arrayOfNumbers = [1, 2, 3, 4, 5];

const array: string[] = [];

array.push(true);
array.push("");
array.push(5);

let arrayOfObjects: {
  name: string;
  age: number;
  gender: boolean;
}[] = [];

arrayOfObjects.push({
  name: "",
  age: 1,
  gender: true,
});

const arrayOfArrays = [
  ["", "", ""],
  ["", ""],
];
const arrayOfArraysOfArrays: string[][][] = [[[""]]];
