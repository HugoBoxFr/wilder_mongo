"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const wilders_1 = __importDefault(require("../controllers/wilders"));
router.post('/', wilders_1.default.create);
// router.post("/searches", wilderController.search);
router.get('/', wilders_1.default.read);
router.get('/:id', wilders_1.default.readOne);
router.get('/:city', wilders_1.default.readByCity);
router.patch('/:id', wilders_1.default.update);
router.delete('/:id', wilders_1.default.delete);
exports.default = router;
//# sourceMappingURL=wilders.js.map