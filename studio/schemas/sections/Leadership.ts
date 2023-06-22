import {HandFist, IdentificationCard} from 'phosphor-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'leadership',
  title: 'Leadership',
  type: 'object',
  icon: HandFist,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'localeString',
    }),
    defineField({
      name: 'members',
      type: 'array',
      title: 'Members',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Member',
          icon: IdentificationCard,
          fields: [
            defineField({
              name: 'photo',
              type: 'photo',
              title: 'Icon',
            }),
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
            }),
            defineField({
              name: 'designation',
              title: 'Designation',
              type: 'string',
            }),

            defineField({
              name: 'body',
              title: 'Body',
              type: 'localeText',
            }),
          ],
          preview: {
            select: {
              title: 'heading',
              subtitle: 'designation',
              media: 'photo',
            },
            prepare({title, subtitle, media}) {
              return {title, subtitle, media, icon: IdentificationCard}
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      subtitle: 'heading.en',
      members: 'members',
    },
    prepare({subtitle, members}) {
      return {
        title: 'Leadership',
        subtitle: subtitle + ` (${members?.length || 0} members)`,
        media: members?.at(0)?.photo,
        icon: HandFist,
      }
    },
  },
})
