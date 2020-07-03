import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");

const db = client.database("mylib");
const users = db.collection("users");
const moduleTemps = db.collection("moduleTemplates");
const modules = db.collection("modules");
const forms = db.collection("forms");
//const activeKeys = db.collection("keys");
export { users, modules, moduleTemps, forms};
