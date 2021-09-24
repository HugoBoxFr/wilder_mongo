"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Wilder_1 = __importDefault(require("../models/Wilder"));
const wilderController = {
    create: async (req, res) => {
        try {
            const response = await Wilder_1.default.init();
            if (response) {
                const wilder = new Wilder_1.default(req.body);
                wilder.save();
                res.json({ success: true, result: wilder });
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: err });
        }
    },
    read: async (req, res) => {
        try {
            const result = await Wilder_1.default.find();
            if (result) {
                res.status(200).json(result);
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: err });
        }
    },
    readOne: async (req, res) => {
        try {
            const result = await Wilder_1.default.findById(req.params.id);
            if (result) {
                res.status(200).json(result);
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: err });
        }
    },
    readByCity: async (req, res) => {
        try {
            const wilders = await Wilder_1.default.find({ city: req.params.city });
            if (wilders) {
                res.status(200).json(wilders);
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: err });
        }
    },
    update: async (req, res) => {
        try {
            const wilder = await Wilder_1.default.findById(req.params.id);
            if (wilder) {
                Object.assign(wilder, req.body);
                wilder.save();
                res.json({ success: true });
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: err });
        }
    },
    delete: async (req, res) => {
        try {
            const wilder = await Wilder_1.default.findOneAndDelete({ _id: req.params.id });
            if (wilder) {
                res.json({ success: true });
            }
        }
        catch (err) {
            res.json({ success: false, result: err });
        }
    },
};
exports.default = wilderController;
//# sourceMappingURL=wilders.js.map