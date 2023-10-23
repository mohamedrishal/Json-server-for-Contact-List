
// import json-server  in index.js file
const jsonServer=require('json-server')

// create a server for contact app
const contactAppServer = jsonServer.create()

// set up path/route from json file
const router = jsonServer.router("db.json")

// Returns middlewares used bu JSON Server. 
const middlewares = jsonServer.defaults()

// set up port for running server
const port = 4000 || process.env.PORT

// use middlewares and router in Server
contactAppServer.use(middlewares)
contactAppServer.use(router)


// to listen server for resolving request from client
contactAppServer.listen(port,()=>{
    console.log(`Contact App Server Started at Port ${port}, and waiting for clint Request!!!`);
})