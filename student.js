class Student {
	constructor(firstName, lastName, grade) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.grade = grade;
	this.tardies = 0;
	}
	fullName() {
		return `Your full name is ${this.firstName} ${this.lastName}`;
	}
	markLate() {
		this.tardies += 1;
		return `${this.firstName} ${this.lastName}`;
	}
	}
//to create a new instance
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
console.log(`${jane.fullName()}`);
console.log(``);