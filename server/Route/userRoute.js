import express from 'express';
import { create, deleteUser, getAll, getOne, update } from '../Controller/userController.js';

const route = express.Router();
route.post("/create", create);
route.get("/readAll",getAll);
route.get("/getone/:id",getOne);
route.put("/update/:id",update);
route.delete("/delete/:id",deleteUser)
export default route;