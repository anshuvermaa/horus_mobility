import {Cursor} from 'phosphor-react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cta',
  type: 'object',
  title: 'CTA',
  icon: Cursor,
  fields: [
    defineField({
      name: 'heading',
      type: 'localeString',
      title: 'Heading',
    }),
    defineField({
      name: 'button',
      type: 'button',
    }),
  ],
  preview: {
    select: {
      subtitle: 'heading.en',
    },
    prepare({subtitle}) {
      return {
        title: 'CTA',
        subtitle,
        icon: Cursor,
      }
    },
  },
})
