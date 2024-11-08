## Blog 1 - The significance of union and intersection types in Typescript.

typescript give us two great features, union types and intersection types, this is help us for define more flexible and precise types for variables and functions.

### What is Union Types in Typescript?

When we using union type, its is essential to ensure that at least one of the types in the union includes all the required properties.
Which we denote by pipe symbol means '|'.
Its provide flexibility and type safety.

#### Example:

```code
    let a = string | number;
    a="A";//valid
    a=1; //valid
    a=true; //invalid
```

### What is intersection Types in Typescript?

When we using intersection type, its is combine the multiple types into the one type. And its includes all properties of both types.
Which we denote by and symbol '&'.
Its provide composition and reusability of type.

#### Example:
```code
interface Person{
    name:string;
    age:number;
}
interface Address{
    city:string;
}

type IntersectionType = Person & Address

const person : IntersectionType={
    name:"Mr. X",
    age:26,
    city:"New York"
}
```
