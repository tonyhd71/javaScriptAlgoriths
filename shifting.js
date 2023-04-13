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
		}
		newNode.next = this.head;
		this.head = newNode;
	}
	/*
	HEAD
	'*' -> 'HELLO' -> 'GOODBYE' -> '!'

	*/
let list = new SinglyLinkedList();
	list.push("HELLO");
	list.push("GOODBYE");
	list.push("!");

