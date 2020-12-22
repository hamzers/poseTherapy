import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const client = new MongoClient();
client.connectWithUri("mongodb://admin:SweetjeZus14472@localhost:27777/?authSource=admin&readPreference=primary&ssl=false");

const usrdb = client.database("users");
const users = usrdb.collection("logicnerve_general");

const modDB = client.database("modules");
const moduleTemps = modDB.collection("templates");
const forms = modDB.collection("forms");

//const activeKeys = db.collection("keys");
export { users, moduleTemps, modDB};
