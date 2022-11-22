"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cipher = void 0;
const cipher = (text, key, encode) => {
    const mod = (n, m) => ((n % m) + m) % m;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const encodedList = text.split('').map(c => {
        if (!alphabet.includes(c))
            return c;
        const shiftedIndex = mod(alphabet.indexOf(c) + (encode ? 1 : -1) * key, alphabet.length);
        return alphabet[shiftedIndex];
    });
    const encodedString = encodedList.join('');
    return encodedString;
};
exports.cipher = cipher;
