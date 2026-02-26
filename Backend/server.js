require('dotenv').config()
const app = require("./src/app")
const connecttodb = require("./src/config/database")

connecttodb();

app.listen(process.env.PORT,()=>{
    console.log("server is running on port "+process.env.PORT);
    
})