db.createCollection("user",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["email"],
            properties:{
                name:{
                    bsonType: "string",
                },
                email:{
                    bsonType:"string",
                },
                age:{
                    basonType: "int",  
                },
            },
        },
    },
});
// git init 
// git add .
// git commit -m " first commit"
// git remote -v
//git remote remove origin
// git remote add origin "path of repo"