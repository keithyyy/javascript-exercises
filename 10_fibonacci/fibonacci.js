const fibonacci = function(input) {
    let select = parseInt(input)


    let gRatio = 1.618034
    let topDom = gRatio**select - (1-gRatio)**select
    let result = topDom / Math.sqrt(5)

    if (select > 0) {
        return Math.round(result)
    } else {
        return "OOPS"
    }
    

};

// Do not edit below this line
module.exports = fibonacci;
