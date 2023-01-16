import { Router } from "express";
import Cards from "../models/Cards";

const router = Router();

router.post("/", async (req, res) => {
  const card = Cards(req.body);
  const cardSaved = await card
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/", async (req, res) => {
  const card = await Cards.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const card = await Cards.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { titular, cardNumber, expireDate, cvv } = req.body;
  const card = await Cards.updateOne(
    { _id: id },
    { $set: { titular, cardNumber, expireDate, cvv } }
  )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const card = await Cards.remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

export default router;
