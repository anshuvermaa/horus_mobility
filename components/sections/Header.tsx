import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Script from 'next/script'

import { Menu } from '@headlessui/react'
import { Icon } from '@iconify/react'

import HeaderSanityInterface from '../../interfaces/sanity/sections/Header'
import { urlFor } from '../../sanity/client'
import Button from '../atoms/Button'
import Container from '../atoms/Container'
import { localizedString } from '../atoms/Text'
import Wrapper from '../atoms/Wrapper'
import Sidebar from '../molecules/Sidebar'

import '/node_modules/flag-icons/css/flag-icons.min.css'
const LOCALES = [
  {
    code: 'en',
    icon: 'fi-gb',
  },
  {
    code: 'fr',
    icon: 'fi-fr',
  },
]
export default function Header(props: HeaderSanityInterface) {
  const router = useRouter()
  return (
    <Wrapper id={'header'} className={'sticky top-0 z-[100] bg-white shadow-lg '}>
      <Container
        className={` z-10 flex w-full flex-col bg-white px-0 py-[15px]   md:px-9 lg:px-9  `}
      >
        <Sidebar {...props} />
        {/* <div className="flex flex-col gap-3 overflow-hidden"> */}

        <div className="flex flex-row items-center">
          <div className="ml-3 flex items-center">
            <Link locale={props.locale} href="/">
              <Image className="z-50" src="/logo.svg" width={130} height={41} alt="horus" />
            </Link>
          </div>

          <div className="flex flex-grow items-center justify-center">
            <ul className="hidden items-center space-x-3 font-inter  md:inline-flex ">
              {props.sections?.map((section) => {
                if (section.sub_links && section.sub_links.length > 0) {
                  return (
                    <Menu
                      key={localizedString(section.heading, props.locale)}
                      as={'div'}
                      className="relative flex flex-col"
                    >
                      <Menu.Button>
                        {({ open }) => (
                          <a
                            className={
                              'flex cursor-pointer items-center rounded-full p-3 text-lg hover:bg-gray-100 ' +
                              (open ? 'font-semibold' : '')
                            }
                          >
                            {localizedString(section.heading, props.locale)}
                            {'  '} <Icon icon="tabler:chevron-down" />
                          </a>
                        )}
                      </Menu.Button>
                      <Menu.Items className="absolute right-[-1] mt-[60px] flex w-[275px] flex-col bg-white py-2.5  px-2 font-[20px] drop-shadow-lg ">
                        {section.sub_links.map((sub_link) => (
                          <Menu.Item
                            key={sub_link.link}
                            as={'div'}
                            className={
                              'group group  rounded-[10px] hover:bg-[#2C68F6] hover:text-white'
                            }
                          >
                            <Link
                              className="flex items-center p-3"
                              href={localizedString(sub_link.link, props.locale)}
                              locale={props.locale}
                            >
                              <div className="mr-4">
                                <Image
                                  alt={''}
                                  height={30}
                                  width={30}
                                  src={urlFor(sub_link.logo)}
                                  className={'group-hover:invert'}
                                />
                              </div>
                              {localizedString(sub_link.heading, props.locale)}
                            </Link>
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Menu>
                  )
                }
                return (
                  <Link
                    key={localizedString(section.heading, props.locale)}
                    className="rounded-full p-3 text-lg hover:bg-gray-100"
                    href={localizedString(section.link, props.locale) || '/'}
                    locale={props.locale}
                  >
                    <li>{localizedString(section.heading, props.locale)}</li>
                  </Link>
                )
              })}
            </ul>
          </div>
          <div className="hidden md:flex lg:flex">
            <a href={localizedString(props.button?.link, props.locale)}>
              <Button variant={'yellowPill'}>
                {localizedString(props.button?.title, props.locale)}
              </Button>
            </a>
          </div>
          <div className="hidden items-center justify-center gap-2 px-4 text-lg md:flex ">
            {LOCALES.map((locale) => (
              <div
                key={locale.code}
                className={'transition-transform duration-100  ease-in hover:scale-110'}
              >
                <Link
                  href={
                    props.slug
                      ? '/' + localizedString(props.slug, locale.code).replace('index', '')
                      : router.asPath
                  }
                  locale={locale.code}
                >
                  <span
                    className={
                      'fi ' +
                      locale.icon +
                      (props.locale === locale.code ? ' scale-105' : ' grayscale  ')
                    }
                  ></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
