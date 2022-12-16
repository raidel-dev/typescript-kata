import { ChildrensPrice, NewReleasePrice, Price, RegularPrice } from "./price";

class Movie {
  title: String;
  priceCode: number;
  price: Price
  public static CHILDRENS = 2;
  public static NEW_RELEASE = 1;
  public static REGULAR = 0;


  constructor(title: String, priceCode: number) {
    this.title = title;
    this.priceCode = priceCode;
    this.setPrice(priceCode);
  }

  getPriceCode(): number {
    return this.priceCode;
  }

  setPrice(priceCode: number): void {
    switch (priceCode) {
      case Movie.REGULAR:
        this.price = new RegularPrice();
        break;
      case Movie.CHILDRENS:
        this.price = new ChildrensPrice();
        break;
      case Movie.NEW_RELEASE:
        this.price = new NewReleasePrice();
        break;
      default:
        throw new Error("");
    }
  }

  getCharge(daysRented: number) {    
    return this.price.getCharge(daysRented);
  }

  getTitle(): String {
    return this.title;
  }
}
export default Movie;