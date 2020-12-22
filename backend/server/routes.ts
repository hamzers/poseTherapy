import { Router, send } from "https://deno.land/x/oak/mod.ts";


import {
  createUser,
  finishAccSetup,
  getUserData,
} from "./controllers/users.ts"

const router = new Router();

//router.get("/", "/index.html");
//^reroute to index.html

//api
router.post("/api/createUser", createUser)
  .post("/api/finishSetup", finishAccSetup)
  .post("/api/getUserData", getUserData);
//modules
router.post("/modules/getModule")
  .post("/modules/updateModule");


export default router;
