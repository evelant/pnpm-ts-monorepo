import { Age, Name, Person } from "@pnpm-ts-monorepo/pkg1"

const person: Person = {
  name: Name.make("Michael"),
  age: Maybe.some(Age.unsafeMake(30))
}

const notPerson = {
  firstName: "Michael"
}

if (Person.is(person)) {
  console.log("Object ", JSON.stringify(person), " is of type Person")
}
if (!Person.is(notPerson)) {
  console.log("Object ", JSON.stringify(notPerson), " is not of type Person")
}
