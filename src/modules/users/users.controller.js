import { Router } from "express";
import { db } from "../../DB/db.connection.js";
const userRouter = Router();
userRouter.get('/',async (req,res,next)=>{
 const users = await db.collection("user").find().toArray();
 res.json({ users });
});
export default userRouter;
