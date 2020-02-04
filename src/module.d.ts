export interface IDictionary<TValue> {
  [id: string]: TValue
}

export interface Dimension {
  width: number
  height: number
}

export interface Metadata {
  dimensions?:IDictionary<Dimension>
  filename:string
  mimetype:string
}

export interface Config {
  bucketName:string
  baseUrl?:string
}
