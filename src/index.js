// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var H, Q, D, N, P;
    var object = {};
    if(currency>10000){return obj={error: "You are rich, my friend! We don't have so much coins for exchange"}}
    H = Math.floor(currency/50);
    Q = Math.floor((currency-H*50)/25);
    D = Math.floor((currency-(H*50+Q*25))/10);
    N = Math.floor((currency-(H*50+Q*25+D*10))/5);
    P = currency-(H*50+Q*25+D*10+N*5);
    
    if (H > 0) object.H = H;
    if (Q > 0) object.Q = Q;
    if (D > 0) object.D = D;
    if (N > 0) object.N = N;
    if (P > 0) object.P = P;

    return object;
};

