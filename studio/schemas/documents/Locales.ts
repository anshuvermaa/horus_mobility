import {Translate} from 'phosphor-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'locales',
  type: 'document',
  i18n: true,
  title: 'Locales',
  icon: Translate,
  groups: [
    {name: 'footer', title: 'Footer'},
    {name: 'teamCard', title: 'Team Card'},
    {name: 'allVehicles', title: 'All Vehicles'},
    {name: 'brand', title: 'Brand'},
  ],
  fields: [
    defineField({
      name: 'subscribeText',
      title: 'Subscribe',
      type: 'localeString',
      group: 'footer',
    }),
    defineField({
      name: 'footerHeader',
      title: 'Footer Header',
      type: 'localeString',
      group: 'footer',
    }),
    defineField({
      name: 'emailPlaceholder',
      title: 'Email Placeholder',
      type: 'localeString',
      group: 'footer',
    }),
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'localeString',
      group: 'footer',
    }),
    defineField({
      name: 'readBio',
      title: 'Read Bio',
      type: 'localeString',
      group: 'teamCard',
    }),
    defineField({
      name: 'showing',
      title: 'Showing',
      type: 'localeString',
      group: 'allVehicles',
    }),
    defineField({
      name: 'of',
      title: 'Of',
      type: 'localeString',
      group: 'allVehicles',
    }),
    defineField({
      name: 'cars',
      title: 'Cars',
      type: 'localeString',
      group: 'allVehicles',
    }),
    defineField({
      name: 'pricing',
      title: 'Pricing',
      type: 'localeString',
      group: 'allVehicles',
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'localeString',
      group: 'allVehicles',
    }),
    defineField({
      name: 'transmission',
      title: 'Transmission',
      type: 'localeString',
      group: 'allVehicles',
    }),
    defineField({
      name: 'destination',
      title: 'Destination',
      type: 'localeString',
      group: 'allVehicles',
    }),
    defineField({
      name: 'day',
      title: 'Day',
      type: 'localeString',
      group: 'allVehicles',
    }),
    defineField({
      name: 'min',
      title: 'Min',
      type: 'localeString',
      group: 'allVehicles',
    }),
    defineField({
      name: 'max',
      title: 'Max',
      type: 'localeString',
      group: 'allVehicles',
    }),
    defineField({
      name: 'apply',
      title: 'Apply',
      type: 'localeString',
      group: 'allVehicles',
    }),
    defineField({
      name: 'automatic',
      title: 'Automatic',
      type: 'localeString',
      group: 'allVehicles',
    }),
    defineField({
      name: 'manual',
      title: 'Manual',
      type: 'localeString',
      group: 'allVehicles',
    }),
    defineField({
      name: 'interCity',
      title: 'Inter City',
      type: 'localeString',
      group: 'allVehicles',
    }),
    defineField({
      name: 'outsideCity',
      title: 'Outside City',
      type: 'localeString',
      group: 'allVehicles',
    }),
    defineField({
      name: 'brandName',
      title: 'Brand Name',
      type: 'localeString',
      group: 'brand',
    }),
    defineField({
      name: 'brandLogo',
      title: 'Brand Logo',
      type: 'image',
      group: 'brand',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Locales',
    }),
  },
})
