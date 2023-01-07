const express = require("express")

const app = express()
app.set("view engine",'ejs')


const runServer = () => {
    const test = {
        name:'Deo',
        id:1234,
        email:'erive92d@gmaiil.com'
    }
    const test2 = {
        name:'joshua',
        id:6436,
        email:'joshua@gmail.com'
    }
    const array = [test,test2]

    app.get('/',(req,res)=> {
        res.render('index',{ test: array[0].name})
    })
    
    console.log('Listening now!')
    
    app.listen(3000)

}
runServer()

module.exports = runServer