import { Router, send } from "https://deno.land/x/oak/mod.ts";
import { testPost } from "./controllers/oldapis/testinfo.ts";
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./controllers/oldapis/products.ts";

import {
  getDoctors,
  getDoctor,
  addDoctor,
  updateDoctor,
  deleteDoctor,  
  getPatients,
  getPatient,
  addPatient,
  updatePatient,
  deletePatient,
} from "./controllers/oldapis/users.ts";


import {
  createUser, finishAccSetup,
} from "./controllers/users.ts"

const router = new Router();


router.get("/api/products", getProducts)
  .get("/api/products/:id", getProduct)
  .post("/api/products", addProduct)
  .put("/api/products/:id", updateProduct)
  .delete("/api/products/:id", deleteProduct);

router.get("/api/doctors", getDoctors)
  .get("/api/doctors/:id", getDoctor)
  .post("/api/doctors", addDoctor)
  .put("/api/doctors/:id", updateDoctor)
  .delete("/api/doctors/:id", deleteDoctor);

router.post("/api/getPatients", getPatients)
  .put("/api/patients/:id", updatePatient)
  .delete("/api/patients/:id", deletePatient);

router.post("/api/createUser", createUser);
router.post("/api/finishSetup", finishAccSetup);


export default router;
