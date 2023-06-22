import Gallery from '../atoms/Gallery'
import Photo from '../atoms/Photo'

import Host from './Host'

export default interface ProductSanityInterface {
  gallery?: Gallery
  id: { current: string }
  brand_name?: string
  transmission_type?: string
  destination?: string
  product_type?: string
  price_per_day?: number
  host?: Host
  name?: string
  product_description?: {
    [key: string]: any[]
  }
  features?: {
    photo: Photo
    text: string
  }[]
}
