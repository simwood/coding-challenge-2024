import { Router } from "express";
import { getClients } from "../services/clients.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    // simulate delay
    await new Promise((res) => {
      setTimeout(() => {
        res();
      }, 1000);
    });
    return res.status(200).json(await getClients());
  } catch (err) {
    next(err);
  }
});

export default router;
