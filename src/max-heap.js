const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.size_heap = 0;
		this.parentNodes = [];
	}

	push(data, priority) {
		let a = new Node(data,priority);
		this.insertNode(a);
		this.shiftNodeUp(a);
	}

	pop() {
		let _root;
		if(this.isEmpty()) { 
			return;
		} else {
			_root = this.detachRoot();
			this.restoreRootFromLastInsertedNode(_root);
			this.shiftNodeDown(this.root);
		}
		return _root.data;
	}	

	detachRoot() {
		let _root;
		if(_root = (this.root !== null ? this.root : null))	{
			if(_root === null) { return _root;}
			this.root = null;
			this.size_heap--;
			 if(this.parentNodes.indexOf(_root) >= 0) {
				this.parentNodes.shift();
			}
			return _root;
		}
	}

	restoreRootFromLastInsertedNode(detached) {
		if(detached){	
			var plast,_root_last,l;
			l = detached.left;
			if (_root_last = this.parentNodes.pop()) {
				this.root = _root_last;
				if (_root_last.parent == null) { 
					return;
				} else {
 					plast = _root_last.parent;
					_root_last.remove();
					if (plast.left != null && plast != detached) {
						this.parentNodes.push(plast);
					}
				}
				if (l) {
					_root_last.appendChild(detached.left);
					
				}
				if (detached.right) {
					_root_last.appendChild(detached.right);
					return;
				}
				this.parentNodes.unshift(_root_last);
			}
		} else {
			return;
		}
	}

	size() {
		return this.size_heap;
	}

	isEmpty() {
		return this.root === null ? true : false;
	}

	clear() {
		this.root = null;
		this.size_heap = 0;
		this.parentNodes = [];
	}

	insertNode(node) {
		this.size_heap++;
		if(this.isEmpty()) {
			this.root = node;
		} else {
			if(this.parentNodes[0].left === null) {
				this.parentNodes[0].appendChild(node);
			} else {
				this.parentNodes[0].appendChild(node);
				this.parentNodes.push(node);				
				this.parentNodes.shift();
				return;
			}
		}
		this.parentNodes.push(node);
	}

	shiftNodeUp(node) {
		if(node != null) {
			if(node.parent != null) {
				let parent_id, branch_id;
				if(node.priority > node.parent.priority) {
					if(node.parent == this.root){
						this.root = node;
					}
					branch_id = this.parentNodes.indexOf(node);
					if((parent_id = this.parentNodes.indexOf(node.parent)) >= 0) {
						this.parentNodes[parent_id] = node;
						this.parentNodes[branch_id] = node.parent;
					} else {
						this.parentNodes[branch_id] = node.parent;
					}
					node.swapWithParent();
					this.shiftNodeUp(node);
				} else {
					return;
				}
			} else {
				return;
			}
		} else {
			return;
		}
	}

	shiftNodeDown(node) {
		if(node != null) {
			let swapedBranch, parent_id, branch_id, _root;
			_root = this.root;
			if(node.left != null) {
				if(node.right != null) {
					swapedBranch = (node.right.priority >= node.left.priority) ? node.right : node.left;
				} else {
					swapedBranch = node.left;
				}
				if(swapedBranch.priority > node.priority) {
					if(node == _root) {
						this.root = swapedBranch;
					}
					swapedBranch.swapWithParent();
					branch_id = this.parentNodes.indexOf(swapedBranch);
					if((parent_id = this.parentNodes.indexOf(node)) >= 0) {
						this.parentNodes[parent_id] = swapedBranch;
						this.parentNodes[branch_id] = node;
					} else {
						this.parentNodes[branch_id] = node;
					}
					this.shiftNodeDown(node);
				} else {
					return;
				}
			} else {
				return;
			}
		} else {
			return;
		}
	}
}

module.exports = MaxHeap;
