import { Schema, model } from 'mongoose';

export interface Wilder {
  name: { type: String; unique: true };
  img: String;
  description: String;
  city: String;
  skills: { title: String; votes: Number }[];
}

const WilderSchema = new Schema({
  name: { type: String, unique: true },
  img: String,
  description: String,
  city: String,
  skills: [{ title: String, votes: Number }],
});
const wilderModel = model<Wilder>('wilder', WilderSchema);

export default wilderModel;
