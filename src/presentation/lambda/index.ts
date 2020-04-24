import { ExpressMiddleware } from "./services/ExpressMiddleware";
import app from "../routes";
import { getMiddlewareResponse } from "./services/ExpressMiddlewareResponse";
import {
  LambdaMiddlewareMapper,
  LambdaEvent
} from "./services/LambdaMiddlewareMapper";

export const handler = async (event: LambdaEvent): Promise<any> => {
  try {
    const mappedEvent = LambdaMiddlewareMapper.toMiddlewareRequest(event);
    console.log("Event: ", mappedEvent);

    const mw = new ExpressMiddleware(app, mappedEvent, getMiddlewareResponse());

    const response = await mw.execute();
    const mappedResponse = LambdaMiddlewareMapper.toLambdaResponse(response);
    console.log("Response: ", mappedResponse);

    return LambdaMiddlewareMapper.toLambdaResponse(response);
  } catch (err) {
    console.log("Error: ", err);
    const response = {
      statusCode: err.statusCode || 400,
      body: JSON.stringify({
        message: err.message || "An unknown error occured"
      })
    };
    console.log("Error output: ", response);

    return response;
  }
};
