class Student {
	constructor(firstName, lastName, grade) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.grade = grade;
	this.tardies = 0;
	this.scores = [];
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
	addScore(score) {
		//the scores of THIS student
		this.scores.push(score);
		return this.scores;
	}
	calculateAverage() {
		//reduce() returns the sum of all elements in an array
		let sum = this.scores.reduce(function(a,b){return a+b;});
		return sum/this.scores.length;
	}
}
//to create a new instance
let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 3);
secondStudent.addScore(92);
console.log(`Second student has ${secondStudent.scores}`);
secondStudent.addScore(66);
secondStudent.addScore(100);
console.log(secondStudent.scores);
console.log('average' + secondStudent.calculateAverage());
/*
console.log(firstStudent.markLate());
console.log(firstStudent.addScore());
*/

