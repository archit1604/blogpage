import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let names=["Archit"];
let content=["example blog content"];
let dates=["29 Feb,2024"];
let titles=["First Blog"];
app.get("/",(req,res)=>{
    
    res.render("index.ejs",{n: names,cont: content,date:dates,title:titles});
})
app.get("/edit",(req,res)=>{
    res.render("edit.ejs");
})
app.post("/submit",(req,res)=>{
    
    names.push(req.body["userName"]);
    content.push(req.body["userCont"]);
    const d=new Date();
    dates.push(d.getDate()+" "+d.toLocaleString('default', { month: 'short' })+","+d.getFullYear());
    titles.push(req.body["userTitle"]);
    res.render("index.ejs",{n: names,cont: content,date:dates,title:titles});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});