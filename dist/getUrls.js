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
const v1_1 = __importDefault(require("uuid/v1"));
const getOptimisticPath_1 = __importDefault(require("./getOptimisticPath"));
const getOptimisticUrl_1 = __importDefault(require("./getOptimisticUrl"));
const getSignedUrl_1 = __importDefault(require("./getSignedUrl"));
exports.default = (metadata, filePath, config) => __awaiter(void 0, void 0, void 0, function* () {
    const fp = filePath(v1_1.default());
    const optimisticPath = getOptimisticPath_1.default(metadata, fp);
    const optimisticUrl = getOptimisticUrl_1.default(config, optimisticPath);
    const [signedUrl] = yield getSignedUrl_1.default(metadata, optimisticPath.imageUrl || optimisticPath.url, config.bucketName);
    return {
        optimisticPath,
        optimisticUrl,
        signedUrl,
    };
});
//# sourceMappingURL=getUrls.js.map