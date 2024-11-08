{
  // Problem 1

  const sumArray = (numbers: number[]): number => {
    // use reduce method
    return numbers.reduce((elem: number, num: number): number => {
      return elem + num;
    }, 0);
  };

  const result: number = sumArray([1, 2, 3, 4, 5]);
    console.log(result);

  //
}
