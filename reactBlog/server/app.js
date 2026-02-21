const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 4000
const Blog = require('./models/Blog')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Connect to mongoose
mongoose.connect('mongodb://localhost/reactBlog',{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>console.log('Database Connected'))
.catch(err=>console.log(err))

app.post('/newBlog', (req, res)=>{
    const title = req.body.title
    const snippet = req.body.snippet
    const blogBody = req.body.blogBody
//the req.body property contains key value pairs of data submitted in the request body or this case the data submitted in the form Const newnote is a new instance of the schema the schema that we are going to save to mongo.

    const newBlog = new Blog({
        title, snippet, blogBody
    })
    newBlog.save((err, data)=>{
        if(err){
            console.log(err);
        }
        res.send('OK')
    })
    console.log(newBlog)
})

app.get('/Blogs', (req, res)=>{
    Blog.find({}, function(err, data){
        //The find() function is used to find particular data from the MongoDB database.
        if(err){
            console.log(err)
        }else{
            res.json(data)
        }
    })
})

app.delete('/deleteBlog/:id', (req, res)=>{
    Blog.deleteOne({_id:req.params.id}, function(err, data){
        if(err){
            console.log(err)
        }else{
            res.send('Deleted')
        }
    })
})

app.put('/update/:id', async(req, res)=>{
     req.data = await Blog.findByIdAndUpdate(req.params.id)
     let data = req.data
     data.title = req.body.title
     data.snippet = req.body.snippet
     data.blogBody = req.body.blogBody
      
     try{
         data = await data.save()
         res.send('updated')
     }catch(err){
        console.log(err)
     }
 })

app.listen(PORT, ()=>{console.log(`Server started at port ${PORT}`)})