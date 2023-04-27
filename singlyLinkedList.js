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
		if (!this.head) {
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
	set(index, val) {
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) {
			this.push(val); // index equal to length is ok, just means insert at end 
			return true;
		} 
		if (index === 0) {
			this.unshift(val);
			return true;
		}
		let newNode = new Node(val);
		let prev = this.get(index - 1);
		let temp = prev.next;
		prev.next = temp;
		this.length++;
		return true;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
	}
}
	let list = new SinglyLinkedList();
	list.push("hey");
	list.push("yo");
	list.push("hi");
	list.push("hello");
	list.insert(0, "second value");
	console.log(list);