import Button from '../atoms/Button'
import Photo from '../atoms/Photo'

export default interface VideoSanityInterface {
  heading?: string
  micro_heading?: string
  video?: {
    video_url?: string
    heading?: string
    description?: string
  }
  locale: string
}
