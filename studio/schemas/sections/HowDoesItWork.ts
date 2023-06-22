import {Cards, Question} from 'phosphor-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'how_does_it_work',
  type: 'object',
  title: 'How Does It Work',
  icon: Question,
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
      name: 'cards',
      title: 'Cards',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Card',
          fields: [
            defineField({
              type: 'photo',
              name: 'photo',
              title: 'Image',
            }),
            defineField({
              type: 'localeString',
              name: 'heading',
              title: 'Heading',
            }),
            defineField({
              type: 'localeText',
              name: 'body',
              title: 'Body',
            }),
            defineField({
              type: 'button',
              name: 'button',
            }),
          ],
          preview: {
            select: {
              title: 'heading.en',
              subtitle: 'body.en',
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
      heading: 'heading.en',
    },
    prepare({heading, cards}) {
      return {
        title: 'How Does it Work',
        subtitle: heading + ` (${cards.length} cards)`,
        media: cards[0].photo.asset,
        icon: Question,
      }
    },
  },
})
