const app = require('./app');

app.listen(process.env.PORT||3000,process.env.IP,()=>{
    console.log(`Server listening on host localhost and port 3000`);
});