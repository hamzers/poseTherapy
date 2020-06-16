import { addUser, updateUserInfo, getUserInfo } from "../database/userActions.ts";
import { newUser, userUpdate, getUser } from "../types.ts"



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

const getUserData = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();


  if (request.hasBody) {
    const user : getUser = body.value;
    const userData = await getUserInfo(user.userId, user.email, user.apiKey);
    if (userData != null) {
      response.status = 200;
      response.body = {
        success: true,
        data: userData,
      };
    } else {
      response.status = 400;
      response.body = {
        success: false,
        data: "invalid",
      };
    }
    
    
  } else {
    response.status = 401;
    response.body = {
      success: false,
      data: "invalid",
    };
  }
};

export { createUser, finishAccSetup, getUserData }