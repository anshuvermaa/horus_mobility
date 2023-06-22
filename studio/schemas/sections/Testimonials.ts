import {UserList, UsersFour} from 'phosphor-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  type: 'object',
  title: 'Testimonials',
  icon: UsersFour,
  fields: [
    defineField({
      name: 'heading',
      type: 'localeString',
      title: 'Heading',
    }),
    defineField({
      name: 'sub_heading',
      type: 'localeText',
      title: 'Sub Heading',
    }),
    defineField({
      type: 'array',
      name: 'testimonials',
      title: 'Testimonials',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Testimonial',
          fields: [
            defineField({
              type: 'photo',
              name: 'photo',
              title: 'Image',
            }),
            defineField({
              type: 'string',
              name: 'name',
              title: 'Name',
            }),
            defineField({
              type: 'date',
              name: 'date',
              title: 'Date',
            }),
            defineField({
              type: 'string',
              name: 'sub_heading',
              title: 'Sub Heading',
            }),
            defineField({
              type: 'localeText',
              name: 'body',
              title: 'Body',
            }),
            defineField({
              type: 'url',
              name: 'link',
              title: 'Link',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'sub_heading',
              media: 'photo',
            },
            prepare({title, subtitle, media}) {
              return {
                title,
                subtitle,
                media,
                icon: UserList,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      testimonials: 'testimonials',
      heading: 'heading.en',
    },
    prepare({heading, testimonials}) {
      return {
        title: 'Testimonials ',
        subtitle: heading + ` (${testimonials?.length || 0} testimonials)`,
        media: testimonials?.at(0)?.photo.asset,
        icon: UsersFour,
      }
    },
  },
})
