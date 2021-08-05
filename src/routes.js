import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
    return res.json({message: "All ok!"})
})

export default routes;
