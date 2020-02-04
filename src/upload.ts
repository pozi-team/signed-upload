import fetch from 'node-fetch'
import { Metadata } from './module'

export default (file, metadata:Metadata, signedUrl:string) => {
  return fetch(signedUrl, {
    body: file,
    headers: {
      'Content-Type': metadata.mimetype,
      'x-goog-meta-data': JSON.stringify(metadata)
    },
    method: 'PUT',
  })
}
