{
  // problem 3

  const countWordOccurrences = (line: string, word: string): number => {
    // Convert in the lowercase
    const lowerCaseLine = line.toLowerCase();
    const lowerCaseWord = word.toLowerCase();

    // split the line and get each word separately
    const words = lowerCaseLine.split(" ");

    // filter the matched word and count
    const check = words.filter((a) => a === lowerCaseWord).length;

    return check;
  };

  const result = countWordOccurrences("I love TypeScript", "typescript");

    console.log(result);

  //
}
