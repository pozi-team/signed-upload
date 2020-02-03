import { Metadata, Config } from '../module'
import _getUrls from './getUrls'
import _upload from './upload'

export const getUrls = _getUrls
export const upload = _upload

export default async (file:File|NodeJS.ReadableStream, metadata:Metadata, filePath, config:Config) => {
  const urls = await getUrls(metadata, filePath, config)
  await upload(file, metadata, urls.signedUrl)
  return urls
}
