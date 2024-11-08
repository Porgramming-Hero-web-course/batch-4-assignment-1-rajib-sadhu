{
  // Problem 2

  const removeDuplicates = (numbers: number[]): number[] => {
    const unique: number[] = []; //get a empty array first
    // use while loop
    let i: number = 0;
    while (i < (numbers.length as number)) {
      // check the previous number already in the unique[] or not, if not then push that number
      if (!unique.includes(numbers[i])) {
        unique.push(numbers[i]); //push the unique number, which is don's set in the unique array
      }

      i++;
    }
    return unique;
  };

  const result: number[] = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

  console.log(result)
  //
}
