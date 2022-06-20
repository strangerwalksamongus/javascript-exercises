

const removeFromArray = function(...args) {
    let myArray = args[0];
    let finalArr = [];

    myArray.forEach(element => {
        if (!args.includes(element)){
            finalArr.push(element);
        }
    });

    return myArray;



}

// Do not edit below this line
module.exports = removeFromArray;
