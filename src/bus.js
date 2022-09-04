export default class Bus {
    constructor(number, maxPassenger, minPassenger, destination, seatPrice, passengers){
        this._number = number;
        this._maxPassenger = maxPassenger;
        this._minPassenger = minPassenger;
        this._destination = destination;
        this._seatPrice = seatPrice;
        this._passengers = 0;
    }

    setNumber(number){
        this._number = number;
    }

    getMaxPassenger(maxPassenger){
        return this._maxPassenger;
    }

    getMinPassenger(minPassenger){
        return this._minPassenger;
    }

    setSeatPrice(seatPrice){
        this._seatPrice = seatPrice;
    }

    addPassengers(number){
        let limit = number + this._passengers;

        if(limit <= this._maxPassenger){
            this._passengers = this._passengers + number;
        }

        if(limit <= this._maxPassenger) {
            return true;
        } else {
            return false;
        }

    }

    removePassengers(number){
        const inicio = this._passengers;
        let limit = this._passengers - number;

        if(limit >= 0){
            this._passengers = this._passengers - number;
        } 
        
        if(inicio != this._passengers) {
            return true;
        } else {
            return false;
        }
        
    }

    soldTickets(){
        return this._passengers * this._seatPrice;
    }

    isReadyToGo(){
        return this._passengers >= this._minPassenger;
    }

    getAvailableSeats(){
        return this._maxPassenger - this._passengers;
    }
}
