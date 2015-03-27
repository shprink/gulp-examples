// Arrows
var odds = evens.map(v => v + 1);

// Multiline strings
`In JavaScript this is
 not legal.`

// Generators
var fibonacci = {
    [Symbol.iterator]: function* () {
        var pre = 0,
            cur = 1;
        for (;;) {
            var temp = pre;
            pre = cur;
            cur += temp;
            yield cur;
        }
    }
}

for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 1000)
        break;
    console.log(n);
}