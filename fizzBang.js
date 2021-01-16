// FIZZBANG for an integer

function fizzBang(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log('FIZZBANG')
    } else if (n % 3 === 0) {
        console.log('FIZZ')
    } else if (n % 5 === 0) {
        console.log('BANG')
    } else {
        console.log('There is neither FIZZ nor BANG')
    };
};


fizzBang(7)

// FIZZBANG for a range

function fizzBangRng(m, n) {
    for (i = m; i >= m && i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FIZZBANG')
        } else if (i % 3 === 0) {
            console.log('FIZZ')
        } else if (i % 5 === 0) {
            console.log('BANG')
        } else {
            console.log(i)
        };
    };
};

fizzBangRng(1, 16)