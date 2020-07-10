import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");

const usrdb = client.database("users");
const users = usrdb.collection("users");

const modDB = client.database("modules");
const moduleTemps = modDB.collection("templates");
const forms = modDB.collection("forms");

//const activeKeys = db.collection("keys");
export { users, moduleTemps, modDB};
