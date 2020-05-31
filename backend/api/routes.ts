import { Router } from "https://deno.land/x/oak/mod.ts";
import { main } from "./main/page.ts";
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./controllers/products.ts";

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
} from "./controllers/users.ts";

import {
  requestApiToken,
  getApiStatus,
  deleteApiToken,
} from "./controllers/apiVerif.ts";

const router = new Router();

router.post("/api/api", requestApiToken)
  .get("/api/api/:id", getApiStatus)
  .delete("/api/api/:id", deleteApiToken);

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

router.get("/api/patients", getPatients)
  .get("/api/patients/:id", getPatient)
  .post("/api/patients", addPatient)
  .put("/api/patients/:id", updatePatient)
  .delete("/api/patients/:id", deletePatient);

router.get("/", main);

export default router;
