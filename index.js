const express = require("express");
const app = express();
const port = 5000;
const mysql = require("mysql2/promise");
export const  DBConnection = async ()=>{
    try{
    const connection = await mysql.creayeConnection({
     host: "localhost",   // write domain of your server
            user: "root",
            password: "",        // write your password
            database: "test"

});
console.log("connected Succesfuly")
 return Connection;
}catch(err){
    console.log({err});
}
}

app.get("/user", async(req, res, next) => {
        const connection =  await DBConnection();
        const sqlquery = "select 1+1 as result";
        try{
        }catch(err){
            console.log({err});
        }
        await connection.query(sqlQuery);
        res.json({message: "Done"})
    });
// app.post('/register',async(req,res,next)=>{
//       console.log({data : req.body});
//       const {name,email,age,gender} = req.body ;
//         const connection =  await DBConnection();
//         const sqlquery = "select * FROM users";
//         try{
//             let connection ;
//          await connection.query(sqlquery,(err,result,fields)=>{
//             if (err){ 
//                 console.log({errors});
//                  return res.status(500).json({message : "internal server error"});
//             }
//                 else {
//             console.log({result});
//             console.log({fields});
//                 }
//         });
//     }catch(err){
//     console.log(err)
//     }
// })        

app.listen(port, () => {
    console.log("Server is running on port", port);
});
