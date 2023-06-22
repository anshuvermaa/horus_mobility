import {ArrowLineUp} from 'phosphor-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'header',
  type: 'object',
  title: 'Header',
  icon: ArrowLineUp,
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
              name: 'link',
              title: 'Link',
              description: 'Link it takes to',
              type: 'localeString',
            }),
            defineField({
              type: 'array',
              name: 'sub_links',
              title: 'Sub Links',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'heading',
                      title: 'Heading',
                      description: 'Heading of the sub link',
                      type: 'localeString',
                    },
                    {
                      name: 'description',
                      title: 'Description',
                      description: 'Description of the sub link (Only displayed on mobile)',
                      type: 'localeString',
                    },
                    defineField({
                      name: 'link',
                      title: 'Link',
                      description: 'Link it takes to',
                      type: 'localeString',
                    }),
                    {
                      name: 'logo',
                      title: 'Logo',
                      description: 'Logo of the navbar section',
                      type: 'photo',
                    },
                  ],
                  preview: {
                    select: {
                      media: 'logo',
                      title: 'heading.en',
                      subtitle: 'description.en',
                    },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: 'heading.en',
              subtitle: 'link.en',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'button',
      type: 'button',
      title: 'CTA',
    }),
  ],
  preview: {
    select: {
      sections: 'sections',
    },
    prepare({sections}) {
      return {
        title: 'Header',
        icon: ArrowLineUp,
        subtitle: (sections?.length || 0) + ' sections',
      }
    },
  },
})
