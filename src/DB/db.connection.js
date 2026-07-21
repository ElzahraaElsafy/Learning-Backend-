import { MongoClient } from "mongodb";

// Connection URL
export let db;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const DBconnection= async function DBconnection (){
    try{
 await client.connect();
 console.log("DB is connected Sucessfully");
 const db = client.db("mongo"); 
}catch(err){
    console.log("err");
}
    };
  
export default DBconnection ;
