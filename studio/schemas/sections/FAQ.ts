import {Cards, CircleWavyQuestion, LightbulbFilament} from 'phosphor-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'object',
  icon: CircleWavyQuestion,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'localeString',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              type: 'localeString',
              name: 'question',
              title: 'Question',
            }),
            defineField({
              type: 'localeString',
              name: 'answer',
              title: 'Answer',
            }),
          ],
          preview: {
            select: {
              title: 'question.en',
              subtitle: 'answer.en',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      faqs: 'faqs',
    },
    prepare({faqs}) {
      return {
        title: 'FAQs',
        subtitle: `(${faqs?.length || 0} faqs) `,
        icon: CircleWavyQuestion,
      }
    },
  },
})
