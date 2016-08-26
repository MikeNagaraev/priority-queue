const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		const MAXSIZE = 30;
		this.heap = new MaxHeap();
		if (maxSize) {
		  this.maxSize = maxSize;
		}else {
		  this.maxSize = MAXSIZE;	
		}

		
	}

	push(data, priority) {
		if(this.heap.size() >= this.maxSize) {
			throw "Push error: overflow";
			return;
		} else {
			this.heap.push(data,priority);
		}
	}

	shift() {
		if(this.isEmpty()){
			throw "ERROR SHIFT"
		}
		return this.heap.pop();

	}

	size() {
		return this.heap.size()
	}

	isEmpty() {
		return this.heap.isEmpty()
	}
}

module.exports = PriorityQueue;
