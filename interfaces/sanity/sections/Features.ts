import Button from '../atoms/Button'
import Photo from '../atoms/Photo'

export default interface FeaturesSanityInterface {
  heading?: string
  body?: string
  cards?: {
    photo?: Photo
    heading?: string
    sub_heading?: string
  }[]
  locale: string
}
