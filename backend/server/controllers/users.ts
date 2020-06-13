import { addUser, updateUserInfo } from "../database/userActions.ts";
interface newUser {
    userId: string;
    email: string;
};

interface userUpdate {
    userId:string;
    email: string;
    updates: {
        type: string;
        fName: string;
        lName: string;
        address: string;
    };
}


interface mod {
    type: string;
    patientId: string;
    docId: string; 
    modId: string;
    data: JSON;
}

const createUser = async (
    { request, response }: { request: any; response: any },
  ) => {
    const body = await request.body();
  
    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        msg: "No data",
      };
    } else {
      const user: newUser = body.value;
      var nU = await addUser(user.userId, user.email);
      response.status = 201;
      response.body = {
        success: true,
        data: nU,
      };
    }
 };



const finishAccSetup = async (
    { request, response }: { request: any; response: any },
  ) => {
    const body = await request.body();
  
    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        msg: "No data",
      };
    } else {
      const update : userUpdate = body.value;
      var updateResult = await updateUserInfo(update.userId, update.email, update.updates);
      response.status = 201;
      response.body = {
        success: true,
        data: updateResult,
      };
    }
};


export { createUser, finishAccSetup }