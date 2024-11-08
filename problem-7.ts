{
  // problem 7

  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge(): number {
      // get current year from Date() method
      const currYear: number = new Date().getFullYear();
      //   subtract current year from car year
      return currYear - this.year;
    }
  }

  const car = new Car("Honda", "Civic", 2018);
  const result: number = car.getCarAge();

//   console.log(result);
  //
}
