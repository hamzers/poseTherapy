import { moduleTemps, modDB } from "./mongo.ts";
import { updateModList } from  "./userActions.ts";

import { v4 } from "https://deno.land/std/uuid/mod.ts";
import {module, patientModule, modRequest} from "../types.ts"




export async function getModule(collec: string, id: String) {
    const mod = await modDB.collection(collec).findOne(id);
    return mod;
}


