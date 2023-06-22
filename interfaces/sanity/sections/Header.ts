import Button from '../atoms/Button'
import Social from '../atoms/Social'

export default interface HeaderSanityInterface {
  button?: Button
  sections?: {
    heading?: string
    sub_links?: {
      heading: string
      description: string
      logo: any
      link: string
    }[]
    link?: string
  }[]
  locale: string
  slug?: {
    [key: string]: string
  }
}
