import { v4 } from "https://deno.land/std/uuid/mod.ts";


export interface moduleInterface {
    //modId: string; //unique identifier for specific module when created
    modCT: string; //module class type
    //mainDoc: string;
    //doctors: string[]; //ids all doctors allowed to access this patient's module (includes main doctor)
    //patientId: string; //id of the patient
    modName: string; //Module name
    //type: string; //type: form or webgame or etc
    //rate: number; //price rate for module (per patient per month)
    data: any; //Data storage template for module
    create(patient: string, mainDoctor: string): Promise<string>; //creates instance of module in db and returns ID identifier of data
    //delete(modID: string, mainDoctor: string): Promise<number>; //delete module existance and information sourced from this module
    update(id: string, data: JSON): Promise<number>;  //update module information based on role from id (doc or pat)
    getData(id: string): Promise<JSON>; //Takes in id (doc or pat) and returns data based on role, else does not
    getPage(id: string): Promise<JSON>; //Takes in id and returns page resources for that specific module
    //backup(mainDoctor: string, modID: string): Promise<string>; //backs up module to secure location and returns access key for backup
    //changeMainDoc(mainDoctor: string, newMainDoctor: string): Promise<number>; //changes the main doctor of the patient for specific module
    //addDoc(newDoc: string): Promise<number>; //changes the main doctor of the patient for specific module
}

export abstract class moduleClass {
    private modId: string; //unique identifier for specific module when created
    //private modCT: string; //module class type
    private mainDoc: string;
    private doctors: string[]; //ids all doctors allowed to access this patient's module ([0] is main doctor)
    private patientId: string; //id of the patient
    private rate: number;
    public module(type: string, rate: number, patientId: string, mainDocId: string) {
        this.modId = v4.generate();
        this.rate = rate;
        this.patientId = patientId;
        this.mainDoc = mainDocId;
        this.doctors = [mainDocId];        
    }
    public async delete(modId:string, mainDoctor: string) {
        //find Database containing module
        
        //mongo delete module from database
        

        //return success (if error, log, else, return 1 for success(or whatever err code fits))
        return 0;
    }
    public async backup(){

    }
    public async changeMainDoc(){

    }
    public async addDoc(){

    }
    
}