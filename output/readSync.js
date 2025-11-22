const { constants } = require('buffer');
const fs = require('fs')
console.log("start reading........");

try {
    const data = fs.readFileSync("./data/diary.txt", "utf-8")
    console.log("File Content")
    console.log(data)
} catch (error) {
    console.log(error.message)
}

console.log("Finished")

