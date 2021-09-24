import { Request, Response } from 'express';

import wilderModel from '../models/Wilder';

export const createWilder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await wilderModel.init();
    if (response) {
      const wilder = new wilderModel(req.body);
      wilder.save();
      res.json({ success: true, result: wilder });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};

export const readWilders = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await wilderModel.find();
    if (result) {
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};

export const readOneWilder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await wilderModel.findById(req.params.id);
    if (result) {
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};

export const readWildersByCity = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const wilders = await wilderModel.find({ city: req.params.city });
    if (wilders) {
      res.status(200).json(wilders);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};

export const updateWilder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const wilder = await wilderModel.findById(req.params.id);

    if (wilder) {
      Object.assign(wilder, req.body);
      wilder.save();
      res.json({ success: true });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};

export const deleteWilder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const wilder = await wilderModel.findOneAndDelete({ _id: req.params.id });
    if (wilder) {
      res.json({ success: true });
    }
  } catch (err) {
    res.json({ success: false, result: err });
  }
};
