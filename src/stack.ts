class Stack<T> {
    top: number;
    items: Record<number, T>;

    constructor() {
        this.top = -1;
        this.items = [];
    }

    get peek(): T {
        return this.items[this.top];
    }

    push(value: T): void {
        this.top += 1;
        this.items[this.top] = value;
    }

    pop(): T | undefined {
        if (this.top < 0) return undefined;

        const value = this.items[this.top];
        delete this.items[this.top];
        this.top -= 1;

        return value;
    }
}

export default Stack;