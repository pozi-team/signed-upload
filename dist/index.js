"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getUrls_1 = __importDefault(require("./getUrls"));
const upload_1 = __importDefault(require("./upload"));
exports.getUrls = getUrls_1.default;
exports.upload = upload_1.default;
exports.default = (file, metadata, filePath, config) => __awaiter(void 0, void 0, void 0, function* () {
    const urls = yield exports.getUrls(metadata, filePath, config);
    yield exports.upload(file, metadata, urls.signedUrl);
    return urls;
});
//# sourceMappingURL=index.js.map