import { describe, it, expect } from "vitest";
import { fizzBuzz } from "../src/fizzbuzz";

describe('fizzbuzz', () => {
    it('should return Fizz if number is divisable by 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz')
    })

    it('should return Buzz if number is divisable by 5', () => {
        expect(fizzBuzz(25)).toBe('Buzz')
    })

    it('should return FizzBuzz if number is divisable by 5 and 3', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })

    it('should return the input as a string if number is not divisable by 5 nor 3', () => {
        expect(fizzBuzz(13)).toBe('13')
    })

})