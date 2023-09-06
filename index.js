const express = require("express")
const app =  express()
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT|| 4000;
// middlewere
app.use(cors())
app.use(express.json())
// mongodb connection

const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@mofasselhosain.qx9zlga.mongodb.net/story_catagory?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

 async function run() {
    try {

        const catagoryCollection = client.db('story_catalog').collection('catagory')
        const productCollection = client.db('story_catalog').collection('product')
    
    
       app.get("/",async(req,res)=>{
        res.send("database coonected")
        console.log("database connect")
       })
       app.post("/create-story",async(req,res)=>{
        const data = req.body
            const result = await  catagoryCollection.insertOne({data})
        res.send(result)
       })

        // app.get('/catagory', async (req, res) => {
        //     const query = {}
        //     const result = await catagoryCollection.find(query).toArray()
        //     res.send(result)
        // })
        // app.get('/products/:company', async (req, res) => {
        //     const company = req.params.company;
        //     const query = { company: company }
        //     const result = await productCollection.find(query).toArray()
        //     res.send(result)
        // })
        // // user seales  
        // app.get('/deshbord/myorders/:email',async(req,res)=>{
        //     const email = req.params.email;

        //     const query = {email:email}
        //     const cursur = await productCollection.find(query);
        //     const result = await cursur.toArray()
        //     res.send(result);
        //     console.log(result);
        // })
//         DB_PASSWORD = mofassel@.bba
// DB_USER_NAME = mofasselhosain
// PORT = 4000

//         app.get('/userInfoUserData',async(req,res)=>{
// const role = req.query.role
//             const query ={}
//             const result = await usersCollectData.find(query).toArray()
//             res.send(result)
//         })
//         app.get('/book',async(req,res)=>{
// const role = req.query.role
//             const query ={}
//             const result = await bookmodalCollection.find(query).toArray()
//             res.send(result)
//         })

      
    }
    finally {

    }
}
run()
// -------------

app.get('/', (req, res) => {

    res.send('server running')
})
app.listen(port, () => {

    console.log(`server port runtun ${port}`);
})