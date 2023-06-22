import {Car, CarSimple, Jeep, Stack} from 'phosphor-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'productCategory',
  type: 'document',
  i18n: true,
  title: 'Product Category',
  icon: Jeep,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeString',
    }),
    defineField({
      name: 'product_category_id',
      title: 'Product Category ID',
      type: 'string',
      options: {
        list: [
          {
            title: 'Sedan',
            value: 'sedan',
          },
          {
            title: 'SUV',
            value: 'suv',
          },
          {
            title: '4x4',
            value: '4x4',
          },
          {
            title: 'Minibus',
            value: 'minibus',
          },
          {
            title: 'All Cars',
            value: 'all',
          },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'description.en',
    },
    prepare({title, subtitle}) {
      return {title, subtitle}
    },
  },
})
