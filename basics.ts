let userName: string = "Edward";
let hasLoggedIn: boolean = true;
let myNumber: number = 10;
let myRegex: RegExp = /foo/;

userName += " Thomas";

console.log(userName);

const names: string[] = userName.split(" ");
const secondArray: Array<number> = [10, 9, 8]

interface Person {
    first: string;
    last: string;
}

const myPerson: Person = {
    first: "Edward",
    last: "Thomas",
}

const ids: Record<number, string> = {
    10: "A",
    20: "B"
}

ids[30] = "C"