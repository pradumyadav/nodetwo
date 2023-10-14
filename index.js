const express=require("express")

const app=express();

const home=require("./router/home")

app.use("/api/main",home) 

app.get("/",(req,res)=>{

res.send("<h1>Express is a popular web application framework for Node.js. It is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. Express simplifies the process of building web applications and APIs by providing a set of tools and features for routing, handling HTTP requests and responses, and managing middleware.</h1>")

})
app.post("/post/DB",(req,res)=>{

    res.send('<h1>Express is a popular web application framework for Node.js. It is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. Express simplifies the process of building web applications and APIs by providing a set of tools and features for routing, handling HTTP requests and responses, and managing middleware.</h1>')
    
})

app.listen(4000,()=>{
    try{

        console.log("We are in  4000")

    }
    catch(err){
        console.log("error")
    }
})