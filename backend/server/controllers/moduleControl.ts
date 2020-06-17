import {modRequest} from "../types.ts";

import {createModules, 
        assignModule,
        getModuleTemp,
        getPatientModule, 
        removeModuleFromPatient, } from "../database/modulesActions.ts";

const assignMod = async (
    { request, response} : {request: any, response: any }, 
    ) => {
    
    const body = await request.body();

    if(request.hasBody) {
        const modReq : modRequest = body.value;
        const res = await assignModule(modReq);
        if (res.status !== 0) {
            response.body = {
                success: true,
                data: res
            };
        } else {
            response.body = {
                success: false,
                data: res.error
            }
        }
    } else {
        response.body = {
            success : false,
            data: "invalid",
        }
    }
}; 
