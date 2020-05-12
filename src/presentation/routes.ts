import express, { Request, Response } from "express";
import createBandEndpoint from "./endpoints/bands/createBandEndpoint";
import getBandEndpoint from "./endpoints/bands/getBandEndpoint";
import createShowEndpoint from "./endpoints/shows/createShowEndpoint";
import getShowsByDayEndpoint from "./endpoints/shows/getShowsByDayEndpoint";
import GUIEndpoint from "./endpoints/GUI/GUIEndpoint";

require("dotenv/config")

const app = express();

app.use(express.json()); 

app.post('/bands', createBandEndpoint)
app.get('/bands', getBandEndpoint)

app.post('/shows', createShowEndpoint)
app.get('/shows/:day', getShowsByDayEndpoint)

app.get('/', GUIEndpoint)

export default app;
