{
  // Problem 4

  // create a type of circle
  interface Circle {
    shape: "circle";
    radius: number;
  }

  // create a type of rectangle
  interface Rectangle {
    shape: "rectangle";
    height: number;
    width: number;
  }

  //   Create Union type
  type Shape = Circle | Rectangle;

  const calculateShapeArea = (shape: Shape): number => {
    // check the shapes and return correct output
    // circle type guard
    if (shape.shape === "circle") {
      return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
    } else if (shape.shape === "rectangle") {
      return parseFloat((shape.height * shape.width).toFixed(2));
    } else {
      return 0;
    }
  };

  const circleArea: number = calculateShapeArea({ shape: "circle", radius: 5 });

  const rectangleArea: number = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log({ circleArea, rectangleArea });

  //
}
