let numberOrString = "Muhammad Brian";

numberOrString = "Lebron James";

numberOrString = 24;

//UNION TYPE
let numberOrString2: string | number | undefined | null = "Muhammad Brian";

numberOrString2 = "Lebron James";
numberOrString2 = 4;
numberOrString2 = true;

let array: ({} | null | undefined)[] = ["", 5, null, undefined, {}];

/////////////////////////

let rainbowColor: "red" | "orange" | 77 = "red";
rainbowColor = "orange";
rainbowColor = "pink";
rainbowColor = 77;

/////////////////////////

enum RainbowTypes {
  RED,
  ORANGE,
  YELLOW,
  BLUE,
  INDIGO,
  VIOLET,
}

let rainbowColor2: RainbowTypes = RainbowTypes.BLUE;

//////////////////////////

let obj: {
  property: string;
  property2?: string;
} = {
  property: "",
};
