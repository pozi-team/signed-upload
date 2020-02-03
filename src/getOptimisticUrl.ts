import { IDictionary, Config } from "../module"

export default ({baseUrl, bucketName}:Config, optimisticPath:IDictionary<string>) => {
  const storageUrl = 'https://storage.googleapis.com'
  const url = baseUrl || `${storageUrl}/${bucketName}`
  return Object.keys(optimisticPath).reduce((acc, cur) => {
    acc[cur] = url+'/'+optimisticPath[cur]
    return acc
  }, {} as IDictionary<string>)
}
