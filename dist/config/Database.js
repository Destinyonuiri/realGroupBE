"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongooseString = process.env.POLLUTION_DB;
const dbConnect = () => {
    try {
        mongoose_1.default.connect(mongooseString).then(() => {
            console.log("connected to our database");
        });
    }
    catch (error) {
        console.log("Error conecting db");
    }
};
exports.dbConnect = dbConnect;
