"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;
const encode_1 = require("./encode");
const encode = (text, key) => (0, encode_1.cipher)(text, key, true);
exports.encode = encode;
const decode = (text, key) => (0, encode_1.cipher)(text, key, false);
exports.decode = decode;
