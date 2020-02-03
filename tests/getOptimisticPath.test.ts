import { expect } from 'chai'
import getOptimisticPath   from '../src/getOptimisticPath'

describe('getOptimisticPath', () => {
  const filePath = 'path/to/file-123'
  const ext = '.jpg'
  it('returns complete path with new file name based on given dimension', () => {
    const metadata = {
      filename: 'original-filename'+ext,
      dimensions: {
        imageUrl: { width: 600, height: 600 },
        thumbUrl: { width: 200, height: 200 },
      },
      mimetype: 'image/jpeg'
    }
    const optimisticPath = getOptimisticPath(metadata, filePath)
    expect(optimisticPath.imageUrl).equal(`${filePath}@${metadata.dimensions.imageUrl.width}x${metadata.dimensions.imageUrl.height}${ext}`)
    expect(optimisticPath.thumbUrl).equal(`${filePath}@${metadata.dimensions.thumbUrl.width}x${metadata.dimensions.thumbUrl.height}${ext}`)
  })

  it('returns a complete path with new file name', () => {
    const metadata = {
      filename: 'original-filename'+ext,
      mimetype: 'file/file'
    }
    const optimisticPath = getOptimisticPath(metadata, filePath)
    expect(optimisticPath.url).equal(`${filePath}${ext}`)
  })
})