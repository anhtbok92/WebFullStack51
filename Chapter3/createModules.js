// export function
module.exports.getMyDateTime = function () {
    return Date();
}

exports.getDirName = function () {
    return __dirname;
}

// export variable
const MY_AGE = 30;
exports.myAge = MY_AGE;


// console.log(module);