class Instructor {
    Name;
    location;
    team = 'web developer'

    constructor(Name, location) {
        this.Name = Name;
        this.location = location;

    }


    startSupportSession(time) {
        console.log(`support session start at ${time}`)
    }
    quizModule(module) {
        console.log(`create quize module ${module}`)
    }

}
const niloy = new Instructor('niloy', 'Dhaka');
console.log(niloy);
niloy.startSupportSession(9.00);
niloy.quizModule(60);