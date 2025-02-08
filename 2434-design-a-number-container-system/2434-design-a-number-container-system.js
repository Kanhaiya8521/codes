class MinHeap {
    constructor() {
        this.heap = [];
    }

    enqueue(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    dequeue() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown(0);
        }
        return min;
    }

    bubbleUp(index) {
        let currentIndex = index;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[currentIndex] >= this.heap[parentIndex]) break;
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
        }
    }

    sinkDown(index) {
        let currentIndex = index;
        const { heap } = this;
        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let swapIndex = null;
            if (leftChildIndex < heap.length && heap[leftChildIndex] < heap[currentIndex]) {
                swapIndex = leftChildIndex;
            }
            if (rightChildIndex < heap.length && heap[rightChildIndex] < heap[currentIndex] && heap[rightChildIndex] < heap[leftChildIndex]) {
                swapIndex = rightChildIndex;
            }
            if (swapIndex === null) break;
            [heap[currentIndex], heap[swapIndex]] = [heap[swapIndex], heap[currentIndex]];
            currentIndex = swapIndex;
        }
    }
	
	peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

var NumberContainers = function() {
    this.container = new Array();
    this.numbers = new Map();
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    this.container[index] = number;

    if (!this.numbers.has(number)) {
        this.numbers.set(number, new MinHeap());
    }

    this.numbers.get(number).enqueue(index);
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    const indices = this.numbers.get(number);
    let index = -1;

    if (indices) {
        while (this.container[indices.peek()] !== number && indices.size() > 0) {
            indices.dequeue();
        }

        if (indices.size() > 0) index = indices.peek();
    }

    return index;
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */