import Button from '../atoms/Button'
import Photo from '../atoms/Photo'

export default interface HowDoesItWorkSanityInterface {
  heading?: string
  sub_heading?: string
  cards?: {
    photo?: Photo
    heading?: string
    body?: string
    button?: Button
  }[]
  locale: string
}
