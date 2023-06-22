import {defineArrayMember, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'array',
  options: {
    layout: 'grid',
  },
  of: [
    defineArrayMember({
      type: 'photo',
    }),
  ],
})
