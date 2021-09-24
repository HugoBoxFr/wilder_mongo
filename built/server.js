"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const wilders_1 = __importDefault(require("./routes/wilders"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: 'http://localhost:3000',
};
app.use((0, cors_1.default)(corsOptions));
// database
mongoose_1.default
    .connect('mongodb://127.0.0.1:27017/wilderdb', {
    autoIndex: true,
})
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log(err));
// middleware
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World form Mongoose');
});
app.use('/api/wilders', wilders_1.default);
// a la fin pour gerer les not found
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});
// start server
app.listen(3001, () => console.log('Server started on 3001'));
//# sourceMappingURL=server.js.map