import {FilmStrip} from 'phosphor-react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'carousel',
  type: 'object',
  title: 'Carousel',
  icon: FilmStrip,

  fields: [
    defineField({
      name: 'gallery',
      type: 'gallery',
    }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Carousel Type',
      options: {
        list: [
          {
            value: 'single',
            title: 'Single Row',
          },
          {
            value: 'double',
            title: 'Double Row',
          },
        ],
      },
    }),
  ],
  preview: {
    select: {
      gallery: 'gallery',
    },
    prepare({gallery}) {
      return {
        title: 'Carousel',
        subtitle: (gallery?.length || 0) + ' images',
        media: gallery?.at(0)?.asset,
        icon: FilmStrip,
      }
    },
  },
})
