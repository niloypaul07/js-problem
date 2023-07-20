class TeamMember {
    Name;
    location;
    constructor(Name, location) {
        this.Name = Name;
        this.location = location;

    }
    provideFeedback() {
        console.log(`${this.Name} Thanks for your feedback`)
    }
}

class Instructor extends TeamMember {

    team = 'web developer'
    constructor(Name, location) {
        super(Name, location);
    }

    startSupportSession(time) {
        console.log(`support session start at ${time}`)
    }
    quizModule(module) {
        console.log(`create quize module ${module}`)
    }

    provideFeedback() {
        console.log(`${this.Name} Thanks for your feedback`)
    }

}
class NewInstructor extends TeamMember {
    team = 'web developer'
    tech;
    constructor(Name, location, tech) {
        super(Name, location);
        this.tech = tech;
    }

    startSupportSession(time) {
        console.log(`support session start at ${time}`)
    }
    quizModule(module) {
        console.log(`create quize module ${module}`)
    }
}

const niloy = new NewInstructor('niloy', 'Dhaka', 'React');
console.log(niloy);
niloy.startSupportSession(8.00);
niloy.quizModule(78);
