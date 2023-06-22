import {IdentificationBadge, Users} from 'phosphor-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'clients',
  title: 'Clients',
  type: 'object',
  icon: Users,
  fields: [
    defineField({
      type: 'array',
      title: 'Clients',
      name: 'clients',
      of: [
        defineArrayMember({
          type: 'object',
          icon: IdentificationBadge,
          fields: [
            defineField({
              title: 'Logo',
              type: 'photo',
              name: 'photo',
            }),
          ],
          preview: {
            select: {
              media: 'photo',
            },
            prepare({media}) {
              return {
                title: media.alt.en,
                media,
                icon: IdentificationBadge,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      clients: 'clients',
    },
    prepare({clients}) {
      return {
        title: 'Clients',
        subtitle: (clients?.length || 0) + ' clients',
        media: clients?.at(0)?.photo.asset,
        icon: Users,
      }
    },
  },
})
