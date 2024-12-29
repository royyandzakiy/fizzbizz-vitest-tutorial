import { describe, it, expect } from "vitest";
import { max } from "../src/max";

describe('max', () => {
    // it.todo('if first param is bigger than second param, return a')
    // it.todo('if first param is smaller than second param, return second param')
    // it.todo('if first param and second param are the same, return first param')

    it('if first param is bigger than second param, return a', () => {
        expect(max(3,1)).toBe(3)
    })

    it('if first param is smaller than second param, return second param', () => {
        expect(max(4,5)).toBe(5)
    })

    it('if first param and second param are the same, return first param', () => {
        expect(max(2,2)).toBe(2)
    })
})