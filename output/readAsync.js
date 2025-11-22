const { error } = require("console")
const fs = require("fs")

console.log("start reading.....")

fs.readFile("./data/diary.txt", "utf-8", (error, data) => {
    if (error) {
        console.error("error happened :", error.message)
    }
    console.log('file content:')
    console.log(data)
})
console.log("Thai runs immediately - no blocking")