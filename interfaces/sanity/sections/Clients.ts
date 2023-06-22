import Photo from '../atoms/Photo'

export default interface ClientsSanityInterface {
  clients?: { photo: Photo }[]
  locale: string
}
