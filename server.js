const express=require("express")
const app=express()
app.use( (req, res, next) => {
    let newdate= new Date()
    let day=newdate.getDay()
    console.log(day)
    console.log(newdate)    
    if ((newdate.getHours() <= 9 || newdate.getHours() >= 17)&&(newdate.getDay() <= 1|| newdate.getDay() >=5)){
        res.send('closed')
    }
    else next()
})
app.use(express.static(__dirname + 'public'));
app.listen(5000,(err)=>{
    if (err) console.log("server is not running")
    else console.log("server is running")
})
