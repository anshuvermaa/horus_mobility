import Button from '../atoms/Button'
import Social from '../atoms/Social'
import Product from '../documents/Product'

export default interface HeroFeaturedProductsSanityInterface {
  heading?: string
  products?: Product[]
  locale: string
}
