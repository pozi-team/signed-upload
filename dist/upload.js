"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.default = (file, metadata, signedUrl) => {
    return node_fetch_1.default(signedUrl, {
        body: file,
        headers: {
            'Content-Type': metadata.mimetype,
            'x-goog-meta-data': JSON.stringify(metadata)
        },
        method: 'PUT',
    });
};
//# sourceMappingURL=upload.js.map