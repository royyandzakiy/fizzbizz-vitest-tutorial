# Fizz Bizz - Unit Testing

Tutorial Source: [Programming with Mosh - JavaScript Unit Testing Tutorial for Beginners](https://www.youtube.com/watch?v=zuKbR4Q428o)

## How to Recreate
- create project with vite, choose Typescript project

    `npm init vite`

- install vitest

    `npm i -D vitest`

- modify `package.json`, add test
    
    ```
    // package.json
    ...
    "test": "vitest"
    ...
    ```

- add & populate `.gitignore`

- convert `.js` into `.ts`

## Code on!
- create test/stack.test.ts -- create `it should be` test cases
    - expect to get lots of `RED` failed tests
- create stack.ts, one function at a time
    - expect to incrementally get `GREEN` passed tests