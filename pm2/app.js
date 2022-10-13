import express from "express";

const app = express();
const PORT =  process.env.PORT || 8080;
const server = app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});


app.use(express.json());
app.get('/', (req,res)=> {
    res.send(`proceso con pid ${process.pid} atendió esta consulta`) 
})




