import { moduleTemps, modules } from "./mongo.ts";
import { updateModList } from  "./userActions.ts";

import { v4 } from "https://deno.land/std/uuid/mod.ts";
import {module, patientModule, modRequest} from "../types.ts"




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

async function assignModule(req: modRequest) {
    
    try {
        let mod = await getModuleTemp(req.modId);
        const newMod: patientModule = {
            umid: v4.generate(),
            mod: mod,
            docId: req.docId,
            patId: req.patId,
        };
        //insert the mods 
        const insert = await modules.insertOne(newMod);
        //insert modIds into patient and doctor
        await updateModList(req.patId, newMod.umid);
        await updateModList(req.docId, newMod.umid);
        return {
            success: true,
        };
    } catch (error) {
        return {
            status: 0,
            error: error,
        };
    }
}

async function removeModuleFromPatient(umid: string, docId: string) {
    const deletion = modules.deleteOne({umid : umid, docId: docId});
    return deletion;
}




export {createModules, assignModule, getModuleTemp, getPatientModule, removeModuleFromPatient};