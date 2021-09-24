"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const WilderSchema = new mongoose_1.Schema({
    name: { type: String, unique: true },
    img: String,
    description: String,
    city: String,
    skills: [{ title: String, votes: Number }],
});
const WilderModel = (0, mongoose_1.model)('wilder', WilderSchema);
exports.default = WilderModel;
//# sourceMappingURL=Wilder.js.map