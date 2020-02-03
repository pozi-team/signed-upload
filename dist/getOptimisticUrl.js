"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ baseUrl, bucketName }, optimisticPath) => {
    const storageUrl = 'https://storage.googleapis.com';
    const url = baseUrl || `${storageUrl}/${bucketName}`;
    return Object.keys(optimisticPath).reduce((acc, cur) => {
        acc[cur] = url + '/' + optimisticPath[cur];
        return acc;
    }, {});
};
//# sourceMappingURL=getOptimisticUrl.js.map