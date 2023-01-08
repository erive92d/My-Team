const express = require("express")

const app = express()
app.set("view engine",'ejs')


const runServer = (data) => {
    console.log(data)
    // const test = {
    //     name:'Deo',
    //     id:1234,
    //     email:'erive92d@gmaiil.com'
    // }
    // const test2 = {
    //     name:'joshua',
    //     id:6436,
    //     email:'joshua@gmail.com'
    // }
    // const array = [test,test2]
    app.use('/assets', express.static("assets"))

    app.get('/',(req,res)=> {
        res.render('index',{ data:data})
    })
    
    console.log('Listening now!')
    
    app.listen(3000)

}


module.exports = runServer