import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Script from 'next/script'

import { localizedString } from '../components/atoms/Text'
import Carousel from '../components/sections/Carousel'
import Clients from '../components/sections/Clients'
import CookieSection from '../components/sections/CookieSection'
import CTA from '../components/sections/CTA'
import FAQ from '../components/sections/FAQ'
import Features from '../components/sections/Features'
import Footer from '../components/sections/Footer'
import Goals from '../components/sections/Goals'
import Header from '../components/sections/Header'
import Hero from '../components/sections/Hero'
import HeroFeaturedProducts from '../components/sections/HeroFeaturedProducts'
import HowDoesItWork from '../components/sections/HowDoesItWork'
import Leadership from '../components/sections/Leadership'
import Notification from '../components/sections/Notification'
import Testimonials from '../components/sections/Testimonials'
import Video from '../components/sections/Video'
import client from '../sanity/client'
interface PageProps {
  page: any
  locale: string
  indexPage: any
  localeStrings: any
}
const COMPONENTS: any = {
  carousel: Carousel,
  clients: Clients,
  cta: CTA,
  faq: FAQ,
  features: Features,
  footer: Footer,
  goals: Goals,
  header: Header,
  hero: Hero,
  hero_featured_products: HeroFeaturedProducts,
  how_does_it_work: HowDoesItWork,
  leadership: Leadership,
  notification: Notification,
  testimonials: Testimonials,
  video: Video,
}
export default function DynamicPage({ page, locale, indexPage, localeStrings }: PageProps) {
  const navSection = indexPage.sections?.find((section: any) => section._type === 'header')
  const notifSection = indexPage.sections?.find((section: any) => section._type === 'notification')
  const footerSection = indexPage.sections?.find((section: any) => section._type === 'footer')
  return (
    <main className={'font-sofia flex flex-col'}>
      <Head>
        <title>{localizedString(page.title, locale)}</title>
        <meta name="title" content={localizedString(page.title, locale)} />
        <meta name="description" content={localizedString(page.description, locale)} />
        <meta name="keywords" content="icelandic salmon, salmon, icelandic fish" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      {page.slug.en !== 'index' && <Notification locale={locale} {...notifSection} />}
      {page.slug.en !== 'index' && <Header slug={page.slug} locale={locale} {...navSection} />}
      {page.sections?.map((section: any) => (
        <React.Fragment key={section._key}>
          {React.createElement(COMPONENTS[section._type as keyof typeof COMPONENTS], {
            ...section,
            slug: page.slug,
            locale,
          })}
        </React.Fragment>
      ))}
      {page.slug.en !== 'index' && <Footer locale={locale} {...footerSection} />}
      <CookieSection />
    </main>
  )
}
export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const pages = await client.fetch(`*[_type == "page"]`)
  const paths: any[] = []
  pages.forEach((page: any) => {
    Object.keys(page.slug).map(
      (locale) =>
        locale !== '_type' &&
        !['', 'index'].includes(localizedString(page.slug, locale)) &&
        paths.push({
          params: { slug: localizedString(page.slug, locale) },
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
  let indexPage
  const pages = await client.fetch(
    `*[_type == "page" && slug.${locale} == "${
      params?.slug || 'index'
    }"]{..., sections[]{..., "products":products[]->{...}}}`
  )
  const localeStrings = await client.fetch(`*[_type == "locales"][0]`)
  if (params?.slug !== 'index') {
    const index = await client.fetch(`*[_type == "page" && slug.en == "index"]`)
    indexPage = index && index.length > 0 && index[0]
  } else indexPage = pages && pages.length > 0 && pages[0]
  return {
    props: {
      page: pages && pages.length > 0 && pages[0],
      indexPage,
      locale: locale || '',
      localeStrings,
    },
  }
}
