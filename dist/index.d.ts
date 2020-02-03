/// <reference types="node" />
import { Metadata, Config } from '../module';
export declare const getUrls: (metadata: Metadata, filePath: any, config: Config) => Promise<{
    optimisticPath: import("../module").IDictionary<string>;
    optimisticUrl: import("../module").IDictionary<string>;
    signedUrl: string;
}>;
export declare const upload: (file: any, metadata: Metadata, signedUrl: string) => Promise<import("node-fetch").Response>;
declare const _default: (file: File | NodeJS.ReadableStream, metadata: Metadata, filePath: any, config: Config) => Promise<{
    optimisticPath: import("../module").IDictionary<string>;
    optimisticUrl: import("../module").IDictionary<string>;
    signedUrl: string;
}>;
export default _default;
