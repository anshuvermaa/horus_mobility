import {Browsers} from 'phosphor-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  i18n: true,
  icon: Browsers,
  description: 'A single page of the website',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'localeString',
      description: 'Main Title and SEO Title of the page',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'localeString',
      description: 'SEO Description of the page',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'localeString',
      description: "Unique slug of the page (dont use a '/' before the slug)",
    }),
    defineField({
      title: 'Sections',
      name: 'sections',
      type: 'array',
      description: 'The different sections of the page',
      of: [
        defineArrayMember({
          type: 'carousel',
        }),
        defineArrayMember({
          type: 'clients',
        }),
        defineArrayMember({
          type: 'cta',
        }),
        defineArrayMember({
          type: 'faq',
        }),
        defineArrayMember({
          type: 'features',
        }),
        defineArrayMember({
          type: 'footer',
        }),
        defineArrayMember({
          type: 'goals',
        }),
        defineArrayMember({
          type: 'header',
        }),
        defineArrayMember({
          type: 'hero',
        }),
        defineArrayMember({
          type: 'hero_featured_products',
        }),
        defineArrayMember({
          type: 'how_does_it_work',
        }),
        defineArrayMember({
          type: 'leadership',
        }),
        defineArrayMember({
          type: 'notification',
        }),
        defineArrayMember({
          type: 'testimonials',
        }),
        defineArrayMember({
          type: 'video',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      slug: 'slug.en',
    },
    prepare({title, slug}) {
      return {
        title,
        subtitle: '/' + (slug === 'index' ? '' : slug),
      }
    },
  },
})
