import { Application } from "https://deno.land/x/oak/mod.ts";
import {viewEngine,engineFactory, adapterFactory} from "https://deno.land/x/view_engine/mod.ts";
import router from "./routes.ts";


const port = 5000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());



console.log(`Server running on port ${port}`);

//with ssl
//await app.listen({ port, secure: true, certFile: "./ssl/server.csr", keyFile:"./ssl/server.key" });

//no ssl
await app.listen({ port });