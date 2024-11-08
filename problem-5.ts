{
  // problem 5

  // use generic property
  const getProperty = <T, Q extends keyof T>(obj: T, key: Q): T[Q] => {
    // return value of given key from object
    return obj[key];
  };

  const person = { name: "Alice", age: 30 };

  const result: string | number = getProperty(person, "name");

  // console.log(result);
  //
}
