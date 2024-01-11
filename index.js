// const message = 'Hello my people\nWe are happy to see you again for message 2'
// const message2 = '\nNew message added'
// require('./script')
const fs = require('fs')

// fs.writeFile('./message2.txt', message, (err)=>{
//     if(err)console.log(err)
// })

// try{fs.appendFile('./message.txt', message2, (err)=>{
//     if(err)console.log( err)
// })}catch(err){
//     console.log(err)
// }

// fs.unlink('./message2.txt', (err)=>{
//     if(err) throw err
// })


// fs.readFile('./message.txt', (err,data)=>{
//     console.log(data.toString())
// })

const http = require('http')
const PORT = 4000

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type':'text/html'})
    fs.readFile('./index.html', (err,data)=>{
    err? console.log(err): res.write(data)
    res.end()
    })
    
})


server.listen(PORT, err=>{
    err? console.log(err): console.log('listening at  port 4000')
})