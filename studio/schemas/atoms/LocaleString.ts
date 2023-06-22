import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'localeString',
  type: 'object',
  title: 'Locale String',
  fields: [
    defineField({
      type: 'string',
      name: 'en',
      title: 'English 🇬🇧',
    }),
    defineField({
      type: 'string',
      title: 'French 🇫🇷',
      name: 'fr',
    }),
  ],
})
