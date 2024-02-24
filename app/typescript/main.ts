import { AsyncMain } from "./async";

// Type over Intersection
type TUserProps = {
  name: string;
  age: number;
};

// with intersection below Admin object will fail, since it doesn't have field 'extra'
type TAdminProps = TUserProps | { role: string; extra: string };

const admin: TAdminProps = {
  name: "admin",
  age: 20,
  role: "dashboard",
};

interface IUserProps {
  name: string;
  age: number;
}

// Generics
function convertToArray<T>(input: T): T[] {
  return [input];
}

const getIndexOfItem = <T>(array: T[], arrayItem: T) => {
  return array.findIndex((item) => item === arrayItem);
};

const createArrayPair = <T, U>(a: T, b: U): [T, U] => {
  return [a, b];
};

// narrowing
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

// industrial-grade greeter function
type GreetFunction = (msg: string) => void;

function Function(greet: GreetFunction, message: string) {
  const mod: string = message.toUpperCase();
  greet(mod);
}

function add(a: number, ...b: number[]): number {
  let sum = a;
  b.forEach((val) => {
    sum = sum + val;
  });

  return sum;
}

type Person = {
  age: number;
  name?: string;
};

function main() {
  AsyncMain();
}

export default main;
