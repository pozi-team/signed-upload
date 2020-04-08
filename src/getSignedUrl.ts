import { Storage } from '@google-cloud/storage'
import { Metadata } from './module'

const storage = new Storage()

export default (metadata:Metadata, filePathWithExt:string, bucketName:string) => {
  const SECONDS = 10000
  const expires = Date.now() + 30 * SECONDS
  const metaHeader = metadata ? {'x-goog-meta-data': JSON.stringify(metadata)} : {}

  const myBucket = storage.bucket(bucketName)
  const bucketFile = myBucket.file(filePathWithExt)
  return bucketFile.getSignedUrl({
    action: 'write',
    contentType: metadata.mimetype,
    expires,
    extensionHeaders: {
      'content-type': metadata.mimetype,
      ...metaHeader
    },
    version: 'v4',
  })
}
