const express=require('express') 
const bodyparser=require('body-parser')
const app=express()

app.use(bodyparser.urlencoded({extended:true}))


app.get('',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get('/calculate', (req, res) => {
    const n1 = Number(req.query.num1);
    const n2 = Number(req.query.num2);
    const add = n1 + n2;
    // Styling the result display
    const resultHtml = `
        <div class="result-container">
            <h2 class="result">Result is: ${add}</h2>
            <p>Message : Success</p>
            <p>Status Code: 200</p>
        </div>
    `;
    res.send(resultHtml);
});

app.listen(3000,(res)=>{
      console.log("Server Started :)")
})