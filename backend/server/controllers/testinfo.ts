interface test {
    name: string,
    email: string,
    message: string,
};
export const testPost = async (
    { request, response }: { request: any; response: any },
  ) => {
    
    const test = await request.body();
    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        msg: "No data",
      };
    } else {
      const input: test = test.value;
      response.status = 201;
      response.body = {
        success: true,
        data: test,
      };
      console.log(test);
    }
  };