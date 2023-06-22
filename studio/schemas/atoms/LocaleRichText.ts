import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'localeRichText',
  type: 'object',
  title: 'Locale Rich Text',
  fields: [
    defineField({
      type: 'array',
      name: 'en',
      title: 'English 🇬🇧',
      of: [
        {
          type: 'block',
        },
        {
          type: 'photo',
        },
      ],
    }),
    defineField({
      type: 'array',
      title: 'French 🇫🇷',
      name: 'fr',
      of: [
        {
          type: 'block',
        },
        {
          type: 'photo',
        },
      ],
    }),
  ],
})
