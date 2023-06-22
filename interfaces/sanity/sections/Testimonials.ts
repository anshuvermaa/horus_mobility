import Button from '../atoms/Button'
import Photo from '../atoms/Photo'

export default interface TestimonialsSanityInterface {
  heading?: string
  sub_heading?: string
  testimonials?: {
    photo?: Photo
    name?: string
    sub_heading?: string
    link?: string
    body?: string
    date?: string
  }[]
  locale: string
}
