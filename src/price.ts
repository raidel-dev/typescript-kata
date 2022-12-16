abstract class Price {
    abstract getCharge(daysRented: number): number;
}
class ChildrensPrice extends Price {
    getCharge(daysRented: number): number {
        var result = 1.5;
        if (daysRented > 3)
            result += (daysRented - 3) * 1.5;
        return result;

    }
}
class NewReleasePrice extends Price {
    getCharge(daysRented: number): number {
        return daysRented * 3;
    }
}
class RegularPrice extends Price {
    getCharge(daysRented: number): number {
        var result = 2;
        if (daysRented > 2)
            result += (daysRented - 2) * 1.5;
        return result;
    }

}

export { Price, NewReleasePrice, ChildrensPrice, RegularPrice };