const fs=require("fs")
function getFileByPath(fpath){
    return new Promise(function(resolve,reject){
        fs.readFile(fpath,"utf-8",(err,dataSet)=>{
            if(err) return reject(err)
            resolve(dataSet)
        })
    })
}
getFileByPath("./css/index.css").then(function(data){
    console.log("1111")
    return getFileByPath("./css/index1.css")
}).then(function(data){
    console.log("2222")
    return getFileByPath("./css/index.css")
}).then(function(data){
    console.log("33333")
}).catch(function(err){
    console.log("catch:"+err)
})
console.log("okok")