import Gallery from '../atoms/Gallery'

export default interface CarouselSanityInterface {
  gallery?: Gallery
  type?: 'single' | 'double'
  locale: string
}
