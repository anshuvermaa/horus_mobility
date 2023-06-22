import Button from '../atoms/Button'
import Gallery from '../atoms/Gallery'
import Social from '../atoms/Social'

export default interface HeroSanityInterface {
  heading?: string
  sub_heading?: string
  gallery?: Gallery
  primary?: Button
  secondary?: Button
  locale: string
}
