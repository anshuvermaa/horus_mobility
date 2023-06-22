import React from 'react'
import { GetStaticProps } from 'next'

import ProductSanityInterface from '../../interfaces/sanity/documents/Product'
import client from '../../sanity/client'
interface PageProps {
  products: ProductSanityInterface[]
  page: any
}
export { default } from './[product_type]'
export const getStaticProps: GetStaticProps<PageProps> = async ({ params, locale }) => {
  const product_categories = await client.fetch(
    `*[_type == "productCategory" && product_category_id=="all"]`
  )
  const products = await client.fetch(`*[_type == "product"]`)
  const pages = await client.fetch(`*[_type == "page" && slug.en == "index"]`)
  return {
    props: {
      products,
      product_category: product_categories?.length > 0 && product_categories[0],
      locale: locale || '',
      product_type: typeof params?.product_type === 'string' ? params?.product_type : 'All',
      page: pages?.length > 0 && pages[0],
    },
  }
}
