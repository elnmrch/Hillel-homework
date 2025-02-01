function pow(x,y) {
    let inPower = x;
    for (let i= 1; i < y; i++) {
        inPower *= x;
    };
    return inPower;
};
console.log(pow(2,3));
