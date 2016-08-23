const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
	}

	push(data, priority) {
		this.insertNode(new Node(data,priority));
		this.shiftNodeUp(new Node(data,priority));
	}

	pop() {
		if(this.isEmpty()) { 
			return;
		} else {
			if(_root = this.detachRoot()) { 
				this.restoreRootFromLastInsertedNode(_root);
				this.shiftNodeDown(this.root);
			} else {
				return null;
			}
			return _root.data; 
		}
	}

	detachRoot() {
		if(_root = this.root ? this.root : null){
			this.root = null;
			this.parentNodes.shift();
			return _root;
		} else {
			return null;
		}
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.parentNodes.length;
	}

	isEmpty() {
		return this.size() ? false : true
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if(this.isEmpty()) {
			this.root = node;
		} else {
			if(this.parentNodes[0].appendChild(node) == null) {
				this.parentNodes.shift();
			}
		}
		this.parentNodes.push(node);
		this.length++;	
		console.log(this.parentNodes,this.length)
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
