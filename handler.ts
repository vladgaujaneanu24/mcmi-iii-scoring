import { Handler } from "aws-lambda";

export const helloWorld: Handler = async (event: any) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello Man",
      input: event,
    }),
  };

  return response;
};
