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
		if (this.tardies >= 3) {
			return 'YOU ARE EXPELLED';
		}
		return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
	}
	}
//to create a new instance
let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 3);
for (let i = 0; i <= 2;i++) {
	console.log(firstStudent.markLate());
}
