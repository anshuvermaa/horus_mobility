import Button from '../atoms/Button'
import Photo from '../atoms/Photo'

export default interface GoalsSanityInterface {
  heading?: string
  micro_heading?: string
  cards?: {
    photo?: Photo
    heading?: string
    sub_heading?: string
    micro_heading?: string
  }[]
  locale: string
}
