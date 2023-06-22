import {FlagBanner} from 'phosphor-react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: FlagBanner,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'localeString',
    }),
    defineField({
      name: 'sub_heading',
      title: 'Sub Heading',
      type: 'localeText',
    }),
    defineField({
      name: 'gallery',
      type: 'gallery',
    }),
    defineField({
      name: 'primary',
      title: 'Primary Button',
      type: 'button',
    }),
    defineField({
      name: 'secondary',
      title: 'Secondary Button',
      type: 'button',
    }),
  ],
  preview: {
    select: {
      heading: 'heading.en',
      gallery: 'gallery',
    },
    prepare({heading, gallery}) {
      return {
        title: 'Hero',
        subtitle: heading + ` (${gallery?.length || 0} images)`,
        media: gallery[0].asset,
        icon: FlagBanner,
      }
    },
  },
})
