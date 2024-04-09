const express=require('express') 
const bodyparser=require('body-parser')
const cors = require('cors')
const app=express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());

//app.use(bodyparser.urlencoded({extended:true}))


/**app.get('',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})**/

//Define a GET endpoint to serve the card data

app.get('/api/cards', (req, res) =>{
    res.json({cards: cardList});
})

const cardList =[
    {
        title:"Kitten 2",
        path: "image/1.webp",
        link: "About Kitten 2",
        description:"Demo description about kitten 2",
        subTitle:"Kitten 2 Subtitle",
    },
    {
        title:"Kitten 3",
        path: "image/2.webp",
        link: "About Kitten 3",
        description:"Demo description about kitten 3",
        subTitle:"Kitten 3 Subtitle",
    }

]

app.get('/api/projects',(req,res) =>{
    res.json({statusCode:200, data: cardList, message:"Success"})
})

var port = process.env.port || 3000;



app.listen(port,() =>{
      console.log("App listening to: "+port)
})