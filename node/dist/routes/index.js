"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_1 = __importDefault(require("./admin"));
const launches_1 = __importDefault(require("./launches"));
const favorites_1 = __importDefault(require("./favorites"));
exports.default = () => {
    const router = (0, express_1.Router)();
    (0, admin_1.default)(router);
    (0, launches_1.default)(router);
    (0, favorites_1.default)(router);
    return router;
};
