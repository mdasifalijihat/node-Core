const fs = require("fs")

const content1 = "This is a content \n node js is awesome!!!"

try{
    fs.writeFileSync("./output/test-sync.txt", content1);
    console.log("File written sync")

}catch(err){
    console.err(err.message)
}

console.log()

const content2 = "this is a content too \n asynchronous!!!";

fs.writeFile("./output/test-Async.txt", content2, (error) => {
    if(error){
        console.error(error.message)
    }else{
        console.log("file written asynchronously")
    }
})

