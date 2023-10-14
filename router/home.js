

const home=require("express").Router()
home.post("/first",(req,res)=>{
res.send({

    "what is express?": "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.It's a layer built on the top of the Node js that helps manage servers and routes.",
    "Express JS": "Middleware- Middleware is a request handler that has access to the application's request-response cycle. Routing- It refers to how an application's endpoint's URLs respond to client requests.Templating - It provides templating engines to build dynamic content on the web pages by creating HTML templates on the server. Debugging -Express makes it easier as it identifies the exact part where bugs are. ",
    "Express JS":"Sometimes, there is no structural way to organize things, and the code becomes non-understandable.There are so many issues with callbacks. The error messages that will come are challenging to understand."

    });
})
home.post("/second",(req,res)=>{
    res.send({

        "what is express?": "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.It's a layer built on the top of the Node js that helps manage servers and routes.",
        " Express JS": "Middleware- Middleware is a request handler that has access to the application's request-response cycle. Routing- It refers to how an application's endpoint's URLs respond to client requests.Templating - It provides templating engines to build dynamic content on the web pages by creating HTML templates on the server. Debugging -Express makes it easier as it identifies the exact part where bugs are. ",
        "Express JS":"Sometimes, there is no structural way to organize things, and the code becomes non-understandable.There are so many issues with callbacks. The error messages that will come are challenging to understand."

        });
    })
 home.put("/third",(req,res)=>{

    res.send({ "what is express?": "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.It's a layer built on the top of the Node js that helps manage servers and routes.",
    " Express JS": "Middleware- Middleware is a request handler that has access to the application's request-response cycle. Routing- It refers to how an application's endpoint's URLs respond to client requests.Templating - It provides templating engines to build dynamic content on the web pages by creating HTML templates on the server. Debugging -Express makes it easier as it identifies the exact part where bugs are. ",
    "Express JS":"Sometimes, there is no structural way to organize things, and the code becomes non-understandable.There are so many issues with callbacks. The error messages that will come are challenging to understand."
})

 })
home.get("/four",(req,res)=>{
    res.send({ 

        "what is express?": "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.It's a layer built on the top of the Node js that helps manage servers and routes.",
        "Express JS": "Middleware- Middleware is a request handler that has access to the application's request-response cycle. Routing- It refers to how an application's endpoint's URLs respond to client requests.Templating - It provides templating engines to build dynamic content on the web pages by creating HTML templates on the server. Debugging -Express makes it easier as it identifies the exact part where bugs are. ",
        "Express JS":"Sometimes, there is no structural way to organize things, and the code becomes non-understandable.There are so many issues with callbacks. The error messages that will come are challenging to understand."
        
        });
 })
module.exports=home