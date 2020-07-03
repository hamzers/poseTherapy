import { apiKey } from "../../types.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

var keys = [
    {
        id: "1rr2",
        userEmail: "gang@gang.com",
        uid: "2",
        createDate: new Date(),
    },
];



// request/add api key
// POST
const requestApiToken = async (
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
    const key: apiKey = body.value;
    key.id = v4.generate();
    key.createDate = new Date();
    keys.push(key);
    response.status = 201;
    response.body = {
      success: true,
      data: key,
    };
  }
};

const getApiStatus = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const key: apiKey | undefined = keys.find((k) => k.id === params.id);
  if (key) {
    response.status = 200;
    response.body = {
      success: true,
      data: key,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      data: "undefined",
    };
  }
};



//delete api key DELETE
//
const deleteApiToken = (
  { params, response }: { params: { id: string }; response: any },
) => {
  keys = keys.filter((k) => k.id !== params.id);
  response.body = {
    success: true,
    msg: "removed",
  };
};

export { requestApiToken, getApiStatus, deleteApiToken };