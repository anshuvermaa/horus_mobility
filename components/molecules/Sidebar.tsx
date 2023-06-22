import React, { useEffect } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { Disclosure } from '@headlessui/react'

import HeaderSanityInterface from '../../interfaces/sanity/sections/Header'
import { urlFor } from '../../sanity/client'
import Button from '../atoms/Button'
import { localizedString } from '../atoms/Text'
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
export default function Sidebar(props: HeaderSanityInterface) {
  const [isOpen, setIsOpen] = useState(false)
  let [showMenu, setShowMenu] = useState<string>()
  let [show, setShow] = useState<boolean>(false)
  const [scrollY, setScrollY] = useState(0)
  const router = useRouter()
  useEffect(() => {
    if (isOpen) {
      setScrollY(window.scrollY)
      setTimeout(() => {
        document.body.style.position = 'fixed'
        document.body.style.top = `-${window.scrollY}px`
      }, 300)
    } else {
      document.body.style.position = ''
      document.body.style.top = ''
      window.scrollTo(0, scrollY)
    }
  }, [isOpen])
  return (
    <>
      {!isOpen ? (
        <button
          className="absolute right-3 top-5 z-10 flex cursor-pointer items-center md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={'1.5'}
            stroke="currentColor"
            className="h-10 w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      ) : null}

      <div
        onScroll={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
        className={`fixed top-0 right-0 z-10 min-h-full w-full bg-white ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } duration-300 ease-in-out`}
      >
        <div className={'z-20  mt-5 flex items-center justify-between pr-3 pl-4'}>
          <div className=" flex items-center">
            <Link locale={props.locale} href="/">
              <Image className="z-50" src="/logo.svg" width={130} height={41} alt="horus" />
            </Link>
          </div>

          <button className="z-20 text-xl text-black" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-row items-center justify-center gap-2 px-4 text-lg sm:flex-col">
          {LOCALES.map((locale) => (
            <div
              key={locale.code}
              className={'transition-transform duration-100  ease-in hover:scale-110'}
            >
              <div
                onClick={async () => {
                  const slug = props.slug
                    ? '/' + localizedString(props.slug, locale.code).replace('index', '')
                    : router.asPath
                  await router.push(slug, slug, { locale: locale.code })
                  router.reload()
                }}
              >
                <span
                  className={
                    'fi ' +
                    locale.icon +
                    (props.locale === locale.code ? ' scale-105' : ' grayscale  ')
                  }
                ></span>
              </div>
            </div>
          ))}
        </div>
        <div className={'mt-7'}>
          {props.sections?.map((section, i) =>
            section.sub_links ? (
              <>
                <div
                  style={{
                    backgroundColor:
                      showMenu === localizedString(section.heading, props.locale) ? '#E8E8E8' : '',
                  }}
                  key={localizedString(section.heading, props.locale)}
                  className="flex cursor-pointer flex-col gap-5 p-5 transition-colors duration-300 ease-in"
                  onClick={() => {
                    setShowMenu((old) =>
                      old ? undefined : localizedString(section.heading, props.locale)
                    )
                  }}
                >
                  <div className="flex  flex-row items-center justify-between px-5 ">
                    <div className="text-black">
                      {localizedString(section.heading, props.locale)}
                    </div>

                    <div className="">
                      <svg
                        className={`${
                          showMenu === localizedString(section.heading, props.locale)
                            ? 'rotate-180'
                            : 'rotate-0'
                        } duration-400 transition ease-in-out sm:flex md:hidden lg:hidden`}
                        width="16"
                        height="9"
                        viewBox="0 0 16 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5976 8.65891L15.1268 7.25545L7.55931 0.334029L0.00806736 7.27312L1.54047 8.673L7.56259 3.14171L13.5976 8.65891Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                  {showMenu === localizedString(section.heading, props.locale) ? (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { height: 'auto' },
                        collapsed: { height: 0 },
                      }}
                      transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className={`${
                        showMenu === localizedString(section.heading, props.locale)
                          ? 'h-[100%]'
                          : 'h-[0]'
                      } flex flex-col gap-5 transition duration-500 ease-in-out sm:flex md:hidden lg:hidden `}
                    >
                      {section.sub_links.map((link, i) => (
                        <>
                          <Link
                            onClick={() => {
                              setShow(!show)
                            }}
                            className="flex items-center"
                            href={localizedString(link.link, props.locale)}
                            locale={props.locale}
                          >
                            <div className="ml-4 flex flex-row items-center gap-5">
                              <div className="flex-shrink-0">
                                <Image src={urlFor(link.logo)} width={30} height={30} alt={''} />
                              </div>
                              <div className="flex flex-col">
                                <div>{localizedString(link.heading, props.locale)}</div>
                                <div className="text-xs">
                                  {localizedString(link.description, props.locale)}
                                </div>
                              </div>
                            </div>
                          </Link>
                          {i < (section.sub_links || []).length - 1 && (
                            <div className={'h-[2px] w-full px-5'}>
                              <div className="h-[2px]  w-full bg-neutral-400 " />
                            </div>
                          )}
                        </>
                      ))}
                    </motion.div>
                  ) : null}
                </div>
                {i < (props.sections || []).length - 1 && (
                  <div className={'h-[2px] w-full px-5'}>
                    <div className="h-[2px]  w-full bg-neutral-400 " />
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="px-5 " key={localizedString(section.heading, props.locale)}>
                  <Link
                    className={'block '}
                    href={localizedString(section.link, props.locale) || '/'}
                    locale={props.locale}
                  >
                    <div className="p-5">{localizedString(section.heading, props.locale)}</div>
                  </Link>
                </div>

                {i < (props.sections || []).length - 1 && (
                  <div className={'h-[2px] w-full px-5'}>
                    <div className="h-[2px]  w-full bg-neutral-400 " />
                  </div>
                )}
              </>
            )
          )}

          <div className="m-auto mx-5 flex justify-center ">
            <a href={localizedString(props.button?.link, props.locale)}>
              <Button
                variant={'yellowPill'}
                className="flex w-full max-w-[457px] items-center justify-between !py-4 !px-7"
              >
                <span className="mr-auto mb-[1px] inline">
                  {localizedString(props.button?.title, props.locale)}
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
