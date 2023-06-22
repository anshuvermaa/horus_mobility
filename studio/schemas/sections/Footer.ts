import {ArrowLineDown} from 'phosphor-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  type: 'object',
  title: 'Footer',
  icon: ArrowLineDown,
  fields: [
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              type: 'localeString',
              name: 'heading',
              title: 'Heading',
            }),
            defineField({
              type: 'array',
              name: 'sub_links',
              title: 'Sub Links',
              of: [defineArrayMember({type: 'button'})],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'socials',
      type: 'array',
      title: 'Socials',
      of: [
        defineArrayMember({
          type: 'social',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      sections: 'sections',
    },
    prepare({sections}) {
      return {
        title: 'Footer',
        subtitle: (sections?.length || 0) + ' sections',
        icon: ArrowLineDown,
      }
    },
  },
})
