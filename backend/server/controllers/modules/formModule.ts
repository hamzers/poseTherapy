import { module } from "../../types.ts";
import {
  dayOfYear,
  currentDayOfYear,
} from "https://deno.land/std/datetime/mod.ts";
import { forms as formDB } from '../../database/mongo.ts';
import { v4 } from "https://deno.land/std/uuid/mod.ts";


interface question {
    data_question: string;
    data_name: string;
    data_type: any;
}
interface form {
    id: string;
    name: string;
    qs: question[];
    data: formData[];
}
interface formData {
    time: Date;
    data_input: any[];
}

//data needs to be structured like this: 
//  field: type
//{
//  bpm: number
//  sugar: number
//  Question: string
//}

async function createNewForm(dataRecords: [], docId: string) {

    let e = {}
    for (let data in dataRecords) {
        
    } 

}

async function addNewData(newData: any[], f: form) {
    let goodType = true;
    for (let x in newData) {
      if (newData[x] !== f.qs[x].data_type) {
          goodType = false;
      }
    }
    if (!goodType) {
        return "bad type error"
    }
    let formdoc: form = await formDB.findOne(f.id);
    formdoc.data.push({
        time: new Date(currentDayOfYear()),
        data_input: newData
    });
    formDB.deleteOne(f.id);
    formDB.insertOne(formdoc); 
}






export {}