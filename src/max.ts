export function max(a: number, b: number) {
    // // old longer code
    // if (a>b) return a;
    // if (b>a) return b;
    // return a;

    // refactored shorter code
    return (a > b) ? a : b;
}