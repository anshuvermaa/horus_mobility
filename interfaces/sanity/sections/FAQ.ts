import Photo from '../atoms/Photo'

export default interface FAQSanityInterface {
  faqs?: {
    question: string
    answer: string
  }[]
  heading: string
  locale: string
}
