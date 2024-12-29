import { describe, beforeEach, it, expect } from "vitest";
import Stack from '../src/stack';

describe('stack', () => {
    // it.todo('should be empty when created');
    // it.todo('should push to top');
    // it.todo('should pop off');
    
    // expect(result).toBe(expected)

    let stack : Stack<string>;
    
    beforeEach(() => {
        stack = new Stack<string>();
    })

    it('should be empty when created', () => {
        stack = new Stack();
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual([]);
    });

    it('should push to top', () => {
        stack.push('Royyan');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('Royyan');
    });

    it('should pop off', () => {
        stack.push('Dzakiy');
        const value = stack.pop();
        expect(stack.top).toBe(-1)
        expect(value).toEqual('Dzakiy')
    });
})