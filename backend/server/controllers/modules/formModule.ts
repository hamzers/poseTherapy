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
    patId: string;
    docId: string;
    name: string;
    qs: question[];
    data: formData[];
}
interface nf {
    patId: string;
    docId: string;
    name: string;
    qs: question[];

}
interface formData {
    time: Date;
    data_input: any[];
}
interface update {
    data: any,
    fID: string;
    patId: string;
}

//data needs to be structured like this: 
//  field: type
//{
//  bpm: number
//  sugar: number
//  Question: string
//}

async function createNewForm(form: nf) {
    let newForm : form = {
        id: v4.generate(),
        patId : form.patId,
        docId : form.docId,
        name : form.name,
        qs: form.qs,
        data: []
    }
    const res = await formDB.insertOne(newForm);
    console.log(res);
    return res;
}

async function addNewData(nd : update){
    let newData = nd.data; 
    let fID = nd.fID; 
    let patId= nd.patId;
    let goodType = true;
    let f = await formDB.findOne({"id": fID, "patId": patId});
    if (f === null) {
        return  {
            status: 500,
            body: "invalid form object"
        }
    }
    for (let x in newData) {
      if (newData[x] !== f.qs[x].data_type) {
          goodType = false;
      }
    }
    if (!goodType) {
        return {
            status: 1210,
            body: "bad type error"
        }
    }
    let formdoc: form = await formDB.findOne(f.id);
    
    formdoc.data.push({
        time: new Date(currentDayOfYear()),
        data_input: newData
    });
    await formDB.deleteOne(f.id);
    const hmm = await formDB.insertOne(formdoc); 
    return hmm
}

async function accessFormData(fid: string, docId: string) {
    let form = await formDB.findOne({id: fid, docId: docId})
    if (form !== null) return {
        status: 200,
        body: form
    };
    return "invalid"
}

////APIS

const assignForm = async (
    { request, response} : {request: any, response: any }, 
    ) => {
    
    const body = await request.body();

    if(request.hasBody) {
        const modReq : nf = body.value;
        const res = await createNewForm(modReq);
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

const updateForm = async (
    { request, response} : {request: any, response: any }, 
    ) => {
    
    const body = await request.body();

    if(request.hasBody) {
        const change : update = body.value;
        const res = await addNewData(change);
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

export {assignForm, addNewData, accessFormData}