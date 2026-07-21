import  express from "express";
import authRouter from "./modules/Auth/auth.controller.js";
import DBconnection from "./DB/db.connection.js";
import userRouter from "./modules/users/users.controller.js";



export const  bootstrap= async()=>{
const app =express();
const port = 3000;
 await DBconnection ();
app.get('/',(req,res,next)=>{
    res.json("Done");

}) 
app.use("/users",userRouter);
app.use("/Auth",authRouter);
app.listen(port,()=>{
    console.log("Server is Running on port "+ port);   
})
}
export default bootstrap;