// Router =  helpful API
import { Router } from "express";
const authRouter = Router();
authRouter.post('/login',(req,res,next)=>{

    res.json({message : " the user login"});
})

export default authRouter;