import {Cards, LightbulbFilament} from 'phosphor-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'goals',
  title: 'Goals',
  type: 'object',
  icon: LightbulbFilament,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'localeString',
    }),
    defineField({
      name: 'micro_heading',
      title: 'Micro heading',
      type: 'localeString',
      initialValue: 'CAPABILITIES',
    }),
    defineField({
      name: 'cards',
      type: 'array',
      title: 'Cards',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Card',
          icon: Cards,
          fields: [
            defineField({
              name: 'photo',
              type: 'photo',
              title: 'Icon',
            }),
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'localeString',
            }),
            defineField({
              name: 'micro_heading',
              title: 'Micro heading',
              type: 'localeString',
              initialValue: 'Growth',
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
              return {title, subtitle, media, icon: Cards}
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading.en',
      cards: 'cards',
    },
    prepare({heading, cards}) {
      return {
        title: 'Goals',
        subtitle: `(${cards?.length || 0} cards) ` + heading,
        media: cards[0].photo.asset,
        icon: LightbulbFilament,
      }
    },
  },
})
