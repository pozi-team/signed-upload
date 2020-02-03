import { Metadata, Config } from '../module';
declare const _default: (metadata: Metadata, filePath: any, config: Config) => Promise<{
    optimisticPath: import("../module").IDictionary<string>;
    optimisticUrl: import("../module").IDictionary<string>;
    signedUrl: string;
}>;
export default _default;
