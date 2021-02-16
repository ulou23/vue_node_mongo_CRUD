

async function listDatabases(client){
    dbList=await client.db().admin().listDatabases();
    console.log("Databases:");
    dbList.databases.forEach(db=> console.log( ` - ${db.name}`));
}


// create
async function createMulti(client,newList){
    const result=await client.db("sample").collection("DataList").insertMany(newList);
    console.log(` ${result.insertedCount} new  List created id `);
    console.log(result.insertedIds)

}
///////////////

async function main(){

const {MongoClient}=require("mongodb")
url="mongodb://localhost:27017/";

const client=new MongoClient(url,{ useNewUrlParser:true, useUnifiedTopology:true})

try {

await client.connect();

await listDatabases(client)

await createMulti(client, [
    {
        name: "Lol",
        desc: "abc",
        number: 5
    },
    {
        name: "oko",
        desc: "abc",
        number: 4
    },
    {name: "Lollllllll",
        desc: "bc",
        number: 90
},
{name: "Lollllll",
desc: "bc",
number: 900000
},
]);

const cursor= client.db("sample").collection("DataList").find({});
const res= await cursor.toArray();
res.forEach((r,i)=> {
        console.log(`${i+1}`);
        console.log( `name: ${r.name}`);
        console.log(` desc ${r.desc}`);    })

}catch(e){
    console.log(e);
} finally {
    await client.close();
}
}

main().catch(console.error);