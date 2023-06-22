import {GridFour} from 'phosphor-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero_featured_products',
  type: 'object',
  title: 'Hero Featured Products',
  icon: GridFour,
  fields: [
    defineField({
      name: 'heading',
      type: 'localeString',
      title: 'Heading',
    }),
    defineField({
      type: 'array',
      name: 'products',
      title: 'Products',
      of: [
        defineArrayMember({
          type: 'reference',
          to: {
            type: 'product',
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      products: 'products',
      heading: 'heading.en',
      photo: 'products.0.gallery.0.asset',
    },
    prepare({heading, products, photo}) {
      return {
        title: 'Featured Products',
        subtitle: heading + ` (${Object.keys(products).length} products)`,
        media: photo,
        icon: GridFour,
      }
    },
  },
})
