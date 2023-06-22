import { createClient } from 'next-sanity'

import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: '3bgi76ao',
  dataset: 'production',
  apiVersion: '2021-10-21',
  token:
    'skWFiRRV5lzJzPWXcCzSBjZF3QXqQ0fYVcvPOVSl1xUPJkaKonRoaOueu9dWkGqcIL0vj90E06ngTWxxBLQOg4ST4F0NhQXWeC1cf4afPpmwwH3Kq48qoOAHGokbWOAC6t0IBxvkYfg03c4qyQIff8VY6bLlbMEv0kuMVNNjWNq4YtVMHoOQ',
  useCdn: false,
})
export default client
export function urlFor(source: any): string {
  if (!source) return ''
  return imageUrlBuilder(client).image(source).url()
}
const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/
export const decodeAssetId = (id: string) => {
  const patternExec = pattern.exec(id)
  if (!patternExec) {
    return {}
  }
  const [, assetId, dimensions, format] = patternExec
  const [width, height] = dimensions.split('x').map((v) => parseInt(v, 10))

  return {
    assetId,
    dimensions: { width, height },
    format,
  }
}
