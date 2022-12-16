import Movie from "./movie";

class Rental {

  movie: Movie;
  daysRented: number;

  constructor(movie: Movie, daysRented: number) {
    this.movie = movie;
    this.daysRented = daysRented;
  }

  getDaysRented(): number {
    return this.daysRented;
  }

  getMovie(): Movie {
    return this.movie;
  }

  getCharge() {
    return this.movie.getCharge(this.daysRented);
  }

  getFrequentRenterPoints() {
    if ((this.getMovie().getPriceCode() == Movie.NEW_RELEASE) && this.getDaysRented() > 1)
      return 2;
    else
      return 1;
  }
}

export default Rental;