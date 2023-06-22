import {Translate} from 'phosphor-react'
import {defineConfig} from 'sanity'
import {deskTool, StructureBuilder} from 'sanity/desk'

// import {media} from 'sanity-plugin-media'
import {visionTool} from '@sanity/vision'

import {schemaTypes} from './schemas'

const ProductTypes = [
  {title: 'SUV', id: 'suv'},
  {title: 'Sedan', id: 'sedan'},
  {title: '4x4', id: '4x4'},
  {title: 'Minibus', id: 'minibus'},
]

const singletons = new Set(['Product', 'Locales'])

// Define the singleton document types
const singletonTypes = new Set(['landing_page', 'locales'])
const singletonListItem = (S: StructureBuilder, typeName: string, title?: string, id?: string) =>
  S.listItem()
    .title(title || typeName)
    .id(id || typeName)
    .child(
      S.document()
        .schemaType(typeName)
        .documentId(id || typeName)
    )

export default defineConfig({
  name: 'default',
  title: 'Horus Mobility',

  projectId: '3bgi76ao',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Horus')
          .items([
            S.listItem()
              .title('Products')
              .child(
                S.list()
                  .id('products')
                  .items(
                    ProductTypes.map((prod) =>
                      S.listItem()
                        .title(prod.title)
                        .child(
                          S.documentTypeList('product').filter(
                            `_type == "product" && product_type=="${prod.id}"`
                          )
                        )
                    )
                  )
              ),
            S.listItem()
              .id('locales')
              .title('Locales')
              .icon(Translate)
              .child(S.document().schemaType('locales').documentId('locales')),
            ...S.documentTypeListItems().filter((item) => {
              return !singletons.has(item.getTitle() || '')
            }),
          ]),
    }),
    visionTool(),
    // documentI18n({languages: ['en', 'fr']}),
    // media(),
  ],

  schema: {
    types: schemaTypes as any,
  },
})
