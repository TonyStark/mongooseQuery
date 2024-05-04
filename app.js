const express=require('express')
const app=express()
const PORT=process.env.PORT||5500
const database=require('./db.js')
const {ProductCategory,Product,User}=require('./schema.js')
app.set('view engine','ejs')
app.use(express.urlencoded())
app.use(express.json());


app.get('/',async(req,res)=>{
	res.render('query')
})
app.post('/',async(req,res)=>{
	try {
        const getQuery=req.body.queryData
        const result = await eval(getQuery)
        // console.log(JSON.stringify(result, null, 2))
        console.log(result)
        res.json(result)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})
app.listen(PORT)