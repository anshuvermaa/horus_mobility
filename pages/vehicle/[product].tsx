import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from '../../components/atoms/Container'
import Wrapper from '../../components/atoms/Wrapper'
import Form from '../../components/molecules/Form'
import ProductCraousal from '../../components/molecules/ProductCraousal'
import ProductDesSection from '../../components/molecules/ProductDesSection'
import Footer from '../../components/sections/Footer'
import Header from '../../components/sections/Header'
import Notification from '../../components/sections/Notification'
import ProductSanityInterface from '../../interfaces/sanity/documents/Product'
import client from '../../sanity/client'

interface PageProps {
  product?: ProductSanityInterface
  page: any
  locale: string
}
export default function ProductType({ product, page, locale }: PageProps) {
  const navSection = page.sections?.find((section: any) => section._type === 'header')
  const notifSection = page.sections?.find((section: any) => section._type === 'notification')
  const footerSection = page.sections?.find((section: any) => section._type === 'footer')
  if (!product) {
    return '404'
  }
  return (
    <div>
      <Head>
        <title>{product.name}</title>
        <meta name="title" content={product.name} />
        <meta name="description" content={product.name} />
        <meta name="keywords" content="icelandic salmon, salmon, icelandic fish" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <Notification {...notifSection} />
      <Header locale={locale} {...navSection} />
      <ProductCraousal product={product} />

      <Wrapper>
        <Container className={'pt-[50px] pb-[100px]'}>
          <div className="flex flex-wrap justify-between gap-5 md:flex-nowrap ">
            <ProductDesSection locale={locale} product={product} />
            <Form product={product} className="max-w-[406px]" />
          </div>
        </Container>
      </Wrapper>

      <Footer {...footerSection} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const products: ProductSanityInterface[] = await client.fetch(`*[_type == "product"]`)
  const paths: any[] = []
  products
    .filter((prod) => prod.id?.current)
    .forEach((product) => {
      locales?.forEach((locale) =>
        paths.push({
          params: {
            product: product.id.current,
          },
          locale,
        })
      )
    })
  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps<PageProps> = async ({ params, locale }) => {
  const products = await client.fetch(
    `*[_type == "product" && id.current=="${params?.product}"]{
  ...,
  features[]->{
    text,
    photo
  }
}`
  )
  const pages = await client.fetch(`*[_type == "page" && slug.en == "index"]`)
  return {
    props: {
      product: products?.length > 0 && products[0],
      page: pages?.length > 0 && pages[0],
      locale: locale || '',
    },
  }
}
