interface test {
    name: string,
    email: string,
    message: string,
};
export const testPost = async (
    { request, response }: { request: any; response: any },
  ) => {
    const test = await request.body();
    console.log(test);
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
        data: input,
      };
      console.log(test);
    }
  };