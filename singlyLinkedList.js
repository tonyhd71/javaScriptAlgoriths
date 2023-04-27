class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
class SinglyLinkedList {
	constructor () {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}
	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while(current.next) { //while there is something
			newTail = current;
			current = current.next;
		}
		//two variables, one that is second to last item, other is last item
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length ===0) {
			this.head = null;
			this.tail = null;
		}
		return current;
		
	}
	shift() {
		if (!this.head) return undefined;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null
		}
		return currentHead;
	}
	unshift(val) {
		let newNode = new Node(val);
		if (!head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null; 
		let counter = 0;
		let current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}
	shift() {
		if (!this.head) return undefined;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		return currentHead;
	}
	/*One way of traversing below
	traverse() {
		let current = this.head;
		while(current) {
			console.log(current.val);
			current = current.next;
		}
		
	}
	*/
}
	let list = new SinglyLinkedList();
	console.log(list);
	list.pop();
	console.log(list);