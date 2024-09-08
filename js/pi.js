function calculatePi(precision, iterations = 10000000) {
    let pi = 0;
    let divisor = 1;
    
    for (let i = 0; i < iterations; i++) {
        pi +=  (i % 2 === 0 ? 1 : -1) / divisor;
        divisor += 2;
    }
    
    // Przybliżenie pi * 4, następnie ograniczamy liczbę miejsc po przecinku
    return (pi * 4).toFixed(precision);
}