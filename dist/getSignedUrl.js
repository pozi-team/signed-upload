"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = require("@google-cloud/storage");
const storage = new storage_1.Storage();
exports.default = (metadata, filePathWithExt, bucketName) => {
    const SECONDS = 10000;
    const expires = Date.now() + 30 * SECONDS;
    const extensionHeaders = metadata ? {
        extensionHeaders: { 'x-goog-meta-data': JSON.stringify(metadata) }
    } : {};
    const myBucket = storage.bucket(bucketName);
    const bucketFile = myBucket.file(filePathWithExt);
    return bucketFile.getSignedUrl(Object.assign(Object.assign({ action: 'write', contentType: metadata.mimetype, expires }, extensionHeaders), { version: 'v4' }));
};
//# sourceMappingURL=getSignedUrl.js.map