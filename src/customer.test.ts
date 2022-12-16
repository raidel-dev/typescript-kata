import Customer from "./customer";
import Rental from "./rental";
import Movie from "./movie";

describe("Customer", () => {
  it("should test", () => {
    const customer = new Customer("Raidel");
    customer.addRental(new Rental(new Movie("Frozen", Movie.REGULAR), 2));
    customer.addRental(new Rental(new Movie("Kungfu Panda", Movie.REGULAR), 3));
    customer.addRental(new Rental(new Movie("Ice Age", Movie.NEW_RELEASE), 2));
    customer.addRental(new Rental(new Movie("Cinderella", Movie.NEW_RELEASE), 3));
    customer.addRental(new Rental(new Movie("The Baby Boss", Movie.CHILDRENS), 2));
    customer.addRental(new Rental(new Movie("Over the Hedge", Movie.CHILDRENS), 4));

    const expected = "Rental Record for Raidel\n" +
      "\tFrozen\t2\n" +
      "\tKungfu Panda\t3.5\n" +
      "\tIce Age\t6\n" +
      "\tCinderella\t9\n" +
      "\tThe Baby Boss\t1.5\n" +
      "\tOver the Hedge\t3\n" +
      "You owed 25\n" +
      "You earned 8 frequent renter points\n";
    const statement = customer.statement();
    expect(statement).toBe(expected);
  });
});
