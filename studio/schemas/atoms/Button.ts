import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      type: 'object',
      name: 'link',
      title: 'Link',
      fields: [
        {
          type: 'url',
          name: 'en',
          title: 'English',
          validation: (Rule) =>
            Rule.uri({
              allowRelative: true,
            }),
        },
        {
          type: 'url',
          name: 'fr',
          title: 'French',
          validation: (Rule) =>
            Rule.uri({
              allowRelative: true,
            }),
        },
      ],
    }),
    defineField({
      type: 'localeString',
      name: 'title',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
