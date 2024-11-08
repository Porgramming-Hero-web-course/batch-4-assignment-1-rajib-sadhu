{
  // problem 8

  //   T assign as a object for input value
  const validateKeys = <T extends object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
    // every method to check if all keys are exist in the object and return boolean value
    return keys.every((key) => key in obj);
  };

  const person = { name: "Alice", age: 25, email: "alice@example.com" };

  const result: boolean = validateKeys(person, ["name", "age"]);

  console.log(result);
  //
}
