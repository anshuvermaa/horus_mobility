import {Cards, SquaresFour} from 'phosphor-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'features',
  title: 'Features',
  type: 'object',
  icon: SquaresFour,

  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'localeString',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'localeText',
    }),
    defineField({
      name: 'cards',
      type: 'array',
      title: 'Cards',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Card',
          fields: [
            defineField({
              name: 'photo',
              type: 'photo',
              title: 'Image',
            }),
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
          ],
          preview: {
            select: {
              title: 'heading.en',
              subtitle: 'sub_heading.en',
              media: 'photo',
            },
            prepare({title, subtitle, media}) {
              return {
                title,
                subtitle,
                media,
                icon: Cards,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      cards: 'cards',
      subtitle: 'heading.en',
    },
    prepare({subtitle, cards}) {
      return {
        title: 'Features',
        subtitle: subtitle + ` (${cards.length} cards)`,
        media: cards[0].photo,
        icon: SquaresFour,
      }
    },
  },
})
