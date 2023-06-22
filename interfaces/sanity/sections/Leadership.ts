import Button from '../atoms/Button'
import Photo from '../atoms/Photo'

export default interface LeadershipSanityInterface {
  heading?: string
  members?: {
    photo?: Photo
    heading?: string
    designation?: string
  }[]
  locale: string
}
