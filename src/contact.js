export default class Contact {
    constructor(name, birthDate, phoneNumber){
        this.setName(name);
        this._birthDate = birthDate;
        this._phoneNumber = phoneNumber;
    }

    getName() {
        return this._name;
    }

    getPhoneNumber(phoneNumber){
        return this._phoneNumber;
    }

    setName(name) {
        this._name = this._capitalizeName(name);
    }

    setBirthDate(birthDate){
        this._birthDate = birthDate;
    }

    _capitalizeName(name){
        let words = name.split(" ");
        let newName = "";

        words.forEach((word) => {
            newName = newName + this._capitalizeWord(word) + " ";
        });

        return newName.trim();
    }

    _capitalizeWord(word){
        word = word.toLowerCase();
        let newWord = word[0].toUpperCase();
        newWord = newWord + word.substr(1);

        return newWord;
    }

    getAge(){
        let today = new Date();
        let dateDif = today - this._birthDate;
        let dateRef = new Date(dateDif);
        let age = dateRef.getFullYear() - 1970;

        return age;
    }

    getDaysToBirthDay(){
        let today = new Date();
        let party = new Date(today.getFullYear(), this._birthDate.getMonth(), this._birthDate.getDate());
        
        let dateDif = party - today;

        let dateRef = new Date(dateDif);
        //en este caso se pone +1 porque la funcion muestra como ya paso el cumpleaños 
        return Math.round(dateDif / 86400000);
    }

    getPhoneNumber(){
        let telefono = this._phoneNumber.toString();
 
        if(telefono.length == 10){
            return telefono.slice(0, 3) + "-" + telefono.slice(3, 6) + "-" + telefono.slice(6); 
        } else {
            return "error";
        }
        
    }
}