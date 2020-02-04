import uuidv1 from 'uuid/v1'

import getOptimisticPath from './getOptimisticPath'
import getOptimisticUrl from './getOptimisticUrl'
import getSignedUrl from './getSignedUrl'
import { Metadata, Config } from './module'

export default async (metadata:Metadata, filePath, config:Config) => {
  const fp = filePath(uuidv1())
  const optimisticPath = getOptimisticPath(metadata, fp)
  const optimisticUrl = getOptimisticUrl(config, optimisticPath)
  const [signedUrl] = await getSignedUrl(metadata, optimisticPath.imageUrl || optimisticPath.url, config.bucketName)

  return {
    optimisticPath,
    optimisticUrl,
    signedUrl,
  }
}
