import Button from '../atoms/Button'
import Social from '../atoms/Social'

export default interface FooterSanityInterface {
  socials?: Social[]
  sections?: {
    heading?: string
    sub_links?: Button[]
  }[]
  locale: string
}
