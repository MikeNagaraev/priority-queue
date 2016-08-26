class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.left = null;
		this.right = null;
		this.parent = null;
	}

	appendChild(node) {
		if(node !== null){
			if(!this.left) {
				this.left = node;
				node.parent = this;
				return;
			} 
			if(!this.right) {
				this.right = node;
				node.parent = this;
				return;
			} 
		} else {
			return ;
		}
	}

	removeChild(node) {
		if(node === null) {
			return;
		}
		let l = this.left;
		let r = this.right;
		if (l === node) {
			this.left = null;
			node.parent = null;
		} else if (r === node) {
			this.right = null;
			node.parent = null;
		} else { 
			throw "RemoveChild ERROR";
		}
	}


	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		let p;
		let pp, pl, pr, l, r;
		if (p = this.parent) {
			pp = this.parent.parent;
			pl = p.left;
			pr = p.right;
			if (r = this.right) {
				r.remove();
			}
			if (l = this.left) {
				l.remove();
			}
			p.remove();

			if (this == pr) {
				this.remove()
				if (pl) {
					pl.remove();
					this.appendChild(pl);
				}
				this.appendChild(p);
			} else if (this == pl) {
				this.remove();
				this.appendChild(p);
				if (pr) {
					pr.remove();
					this.appendChild(pr);
				}
			} 
			p.appendChild(l);
			p.appendChild(r);
			if (pp) {
				pp.appendChild(this);
			}
		} else {
			return;
		}
	}
}

module.exports = Node;
