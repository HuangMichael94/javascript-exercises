const fibonacci = function(n) {
    let num = parseInt(n);

    if (num < 0) {return 'OOPS'}
    if (num === 0) {return 0;}
    if (num === 1) {return 1;}

    let a=1;
    let b=1;
    let c=1;
    for(let i=2; i<num; i++){
        c=a+b;
        a=b;
        b=c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
