# @pozible/signed-upload
Use [Signed URLs](https://cloud.google.com/storage/docs/access-control/signed-urls) to upload a file straight to Cloud Storage. It returns `optimisticUrl` to access the file once it is uploaded.

## Usage
```js
import signedUpload, { getUrls, upload } from '@pozible/signed-upload'

const {optimisticUrl, signedUrl} = await getUrls(metadata, filePath, config)

await upload(file, metadata, signedUrl)

// Or bootstrap the two commands with
const {optimisticUrl} = await signedUpload(file, metadata, filePath, config)
```

## Arguments
### `metadata`
`dimensions` attribute is used together with Cloud Function listening on bucket's changes to further process the image. Omit it when uploading generic files.
```js
{
  dimensions: {
    imageUrl: {
      width,
      height
    },
    thumbUrl: {
      ...
    },
    ...
  },
  filename: 'original-filename.ext',
  mimetype: 'valid/type'
}
```

### `filePath`
A function to provide a final path to the file in your bucket with uuid as a parameter to give random value to the file name. No need to add extension as it will be automatically added based on given filename in `metadata`.
```js
const filePath = randomId => `/path/to/your/file-with-${randomId}`
const filePath = () => `/path/to/your/original-file-name`
```

### `config`
- `baseUrl` (optional): Add baseUrl to be added to `optimisticPath` to form complete `optimisticUrl`.
- `bucketName`: When it is deployed to Google Cloud Platform it will use current project, else specify one here.
