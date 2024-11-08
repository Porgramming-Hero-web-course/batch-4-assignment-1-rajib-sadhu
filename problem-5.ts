{
  // problem 5

  //
  const getProperty = <T, Q extends keyof T>(obj: T, key: Q): T[Q] => {
    return obj[key];
  };

  const person = { name: "Alice", age: 30 };

  const result: string | number = getProperty(person, "name");

  console.log(result);
  //
}
