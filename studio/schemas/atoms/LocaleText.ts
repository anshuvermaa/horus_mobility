import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'localeText',
  type: 'object',
  title: 'Locale Text',
  fields: [
    defineField({
      type: 'text',
      name: 'en',
      title: 'English 🇬🇧',
    }),
    defineField({
      type: 'text',
      title: 'French 🇫🇷',
      name: 'fr',
    }),
  ],
})
