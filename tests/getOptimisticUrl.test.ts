import { expect } from 'chai'
import getOptimisticUrl from '../src/getOptimisticUrl'

describe('getOptimisticUrl', () => {
  it('returns each optimistic path with given baseUrl', () => {
    const config = {
      baseUrl: 'https://cdn.pozible.com',
      bucketName: 'my-bucket'
    }
    const optimisticPath = {
      imageUrl: 'path/to/imageUrl.jpg',
      thumbUrl: 'path/to/thumbUrl.jpg',
    }
    const optimisticUrl = getOptimisticUrl(config, optimisticPath)
    expect(optimisticUrl.imageUrl).equal(config.baseUrl+'/'+optimisticPath.imageUrl)
    expect(optimisticUrl.thumbUrl).equal(config.baseUrl+'/'+optimisticPath.thumbUrl)
  })

  it('returns optimistic path with default baseUrl', () => {
    const config = {
      bucketName: 'my-bucket'
    }
    const optimisticPath = {
      imageUrl: 'path/to/imageUrl.jpg',
    }
    const optimisticUrl = getOptimisticUrl(config, optimisticPath)
    expect(optimisticUrl.imageUrl).equal('https://storage.googleapis.com/'+config.bucketName+'/'+optimisticPath.imageUrl)
  })
})