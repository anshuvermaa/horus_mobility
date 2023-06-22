import {Car} from 'phosphor-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  type: 'document',
  i18n: true,
  title: 'Product',
  icon: Car,
  fields: [
    defineField({
      name: 'gallery',
      type: 'gallery',
    }),

    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'id',
      type: 'slug',
      title: 'ID',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      title: 'Price per day',
      name: 'price_per_day',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Product Type',
      name: 'product_type',
      type: 'string',
      validation: (Rule) => Rule.required(),

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
        ],
      },
    }),

    defineField({
      title: 'Transmission Type',
      name: 'transmission_type',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: 'Automatic',
            value: 'automatic',
          },
          {
            title: 'Manual',
            value: 'manual',
          },
        ],
      },
    }),

    defineField({
      title: 'Destination',
      name: 'destination',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            value: 'inter-city',
            title: 'Inter City',
          },
          {
            value: 'outside-city',
            title: 'Outside City',
          },
        ],
      },
    }),
    defineField({
      title: 'Brand Name',
      name: 'brand_name',
      validation: (Rule) => Rule.required(),

      type: 'string',
    }),
    defineField({
      title: 'Host',
      name: 'host',
      type: 'reference',
      validation: (Rule) => Rule.required(),

      to: {type: 'host'},
    }),
    defineField({
      title: 'Product description',
      name: 'product_description',
      validation: (Rule) => Rule.required(),
      type: 'localeRichText',
    }),
    defineField({
      title: 'Car Amenities',
      name: 'features',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          title: 'Amenity',
          to: {type: 'feature'},
        }),
      ],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      brand_name: 'brand_name',
      host: 'host.company_name',
      photo: 'gallery.0.asset',
    },
    prepare({name, brand_name, host, photo}) {
      return {
        title: `${name} - ${brand_name}`,
        subtitle: `by ${host}`,
        media: photo,
      }
    },
  },
})
