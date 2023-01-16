import express from "express";
import morgan from "morgan";
import cardsController from './controller/cardsController'

const cors = require('cors');
const app = express();



//MiddleWares
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cors());
//controller
app.use(cardsController);

export default app;