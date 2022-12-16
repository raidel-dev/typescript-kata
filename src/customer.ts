import Movie from './movie';
import Rental from './rental';

class Customer {
  name: String;
  rentals: Rental[];

  constructor(name: String) {
    this.name = name;
    this.rentals = [];
  }

  addRental(rental: Rental) {
    this.rentals.push(rental);
  }

  getName(): String {
    return this.name;
  }

  statement(): String {
    var totalAmount = 0.0;
    var frequentRenterPoints = 0;
    var result = "Rental Record for " + this.getName() + "\n";

    this.rentals.forEach(it => {
      var thisAmount = 0.0;
      thisAmount = it.getCharge();
      frequentRenterPoints += it.getFrequentRenterPoints();
      result += "\t" + it.getMovie().getTitle() + "\t" + thisAmount + "\n";
      totalAmount += thisAmount;
    })

    result += "You owed " + totalAmount + "\n";
    result += "You earned " + frequentRenterPoints + " frequent renter points\n";

    return result;
  }
}

export default Customer;