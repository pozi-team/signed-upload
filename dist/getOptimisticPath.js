"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getExtension = fileName => fileName.split('.').pop();
exports.default = (metadata, filePath) => {
    const ext = getExtension(metadata.filename);
    const dimensions = metadata.dimensions || {};
    if (!dimensions || Object.keys(dimensions).length === 0)
        return { url: `${filePath}.${ext}` };
    return Object.keys(dimensions).reduce((acc, cur) => {
        const { height, width } = dimensions[cur];
        acc[cur] = `${filePath}@${width}x${height}.${ext}`;
        return acc;
    }, {});
};
//# sourceMappingURL=getOptimisticPath.js.map