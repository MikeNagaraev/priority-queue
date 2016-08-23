class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.left = null;
		this.right = null;
		this.parent = null;
	}

	appendChild(node) {
		if(!this.left) {
			this.left = node;
			node.parent = this;
			return;
		} else if(!this.right) {
			this.right = node;
			node.parent = this;
			return;
		}
		return null;
	}

	removeChild(node) {

	}

	remove() {

	}

	swapWithParent() {
		
	}
}

module.exports = Node;
