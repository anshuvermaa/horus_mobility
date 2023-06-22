import {IdentificationCard} from 'phosphor-react'
import {defineField, defineType} from 'sanity'

import {BulbFilledIcon, BulbOutlineIcon} from '@sanity/icons'

export default defineType({
  name: 'feature',
  type: 'document',
  title: 'Car Amenities',
  icon: BulbOutlineIcon,
  i18n: true,
  fields: [
    defineField({
      type: 'photo',
      name: 'photo',
      title: 'Icon',
    }),
    defineField({
      type: 'localeString',
      name: 'text',
      title: 'Text',
    }),
  ],
  preview: {
    select: {
      media: 'photo',
      title: 'text.en',
    },
  },
})
