const express = require("express");
const app = express();
const path = require("path");

app.listen(3300,()=>{
    console.log('servidor corriendo en http://localhost:3300');
})
/* app.get('/',(req,res)=>{
    res.send('Hola mundo');
}) */

app.use(express.static(path.resolve(__dirname,"./public")));

app.get('/',(req,res)=>{
	res.sendFile(path.resolve(__dirname,"./views/home.html"))
});
app.get('/register',(req,res)=>{
	res.sendFile(path.resolve(__dirname,"./views/register.html"))
});
app.post('/register',(req,res)=>{ //esto es para que al apretar submit me devuelva al home
	res.sendFile(path.resolve(__dirname,"./views/home.html"))
});
app.get('/login',(req,res)=>{
	res.sendFile(path.resolve(__dirname,"./views/login.html"))
});
app.post('/login',(req,res)=>{ //esto es para que al apretar submit me devuelva al home
	res.sendFile(path.resolve(__dirname,"./views/home.html"))
});
app.get('/search',(req,res)=>{
	console.log("Busqueda")
});