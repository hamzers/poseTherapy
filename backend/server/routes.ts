import { Router, send } from "https://deno.land/x/oak/mod.ts";


import {
  createUser,
  finishAccSetup,
  getUserData,
} from "./controllers/users.ts"

const router = new Router();

router.post("/api/createUser", createUser)
  .post("/api/finishSetup", finishAccSetup)
  .post("/api/getUserData", getUserData);


export default router;
