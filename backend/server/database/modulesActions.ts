import { moduleTemps, modules } from "./mongo.ts";
import { updateModList } from  "./userActions.ts";

import { v4 } from "https://deno.land/std/uuid/mod.ts";
import {module, patientModule} from "../types.ts"




async function createModules(mod: module) {
    const result = await moduleTemps.insertOne({mod});
    return result;
}

async function getModuleTemp(id: string) {
    const mod = await moduleTemps.findOne({modId: id});
    return mod;
}

async function getPatientModule(modId: string) {
    const module = await modules.findOne({modId: modId});
    return module;
}

async function assignModule(modId: string, patientId: string, patientEmail: string, doctorId: string) {
    try {
        let mod = await getModuleTemp(modId);
        const newMod: patientModule = {
            umid: v4.generate(),
            mod: mod,
            docId: doctorId,
            patId: patientId,
        };
        //insert the mods 
        const insert = modules.insertOne(newMod);
        //insert modIds into patient and doctor
        await updateModList(patientId, newMod.umid);
        await updateModList(doctorId, newMod.umid);
        return {
            success: true,
        };
    } catch (error) {
        return error;
    }
}

async function removeModuleFromPatient(umid: string, docId: string) {
    const deletion = modules.deleteOne({umid : umid, docId: docId});
    return deletion;
}




export {createModules, assignModule, getModuleTemp, getPatientModule, removeModuleFromPatient};