import React from 'react'
import Link from 'next/link'

import { Icon } from '@iconify/react'

import FooterSanityInterface from '../../interfaces/sanity/sections/Footer'
import Container from '../atoms/Container'
import { localizedString } from '../atoms/Text'
import Wrapper from '../atoms/Wrapper'
export default function Footer(props: FooterSanityInterface) {
  return (
    <Wrapper className={'bg-[#222222]'}>
      <Container className={' !px-0'}>
        {/* Component: sections/Footer.tsx props: {JSON.stringify(props)} */}
        <footer className="">
          <div className="mx-auto max-w-[1548px]">
            <div className="list-style:list-none mb-5 grid grid-cols-2 gap-4 gap-y-12 px-4 pt-10 text-white md:grid-cols-5 lg:ml-8 lg:pt-[276px] ">
              <div className="col-span-2 sm:ml-10">
                <p className="mb-1 text-lg opacity-80">Restez à l&apos;affût !</p>

                <form
                  name="newsletter"
                  action="/success"
                  method="POST"
                  data-netlify="true"
                  className=""
                >
                  <input type="hidden" name="form-name" value="newsletter" />

                  <div className="relative">
                    <input
                      required
                      name="email"
                      type="email"
                      className="rounded-sm bg-[#2D2D2C] py-3 pr-5 indent-2 focus:outline-none sm:mb-0"
                      placeholder="  Votre email"
                    />
                    <button
                      className="right-25 opacity-85 absolute top-0 h-full bg-[#2D2D2C] pr-2"
                      type="submit"
                    >
                      S&apos;abonner &rarr;
                    </button>
                  </div>
                </form>
                <p className="text-gray-25 mt-1 max-w-[320px] text-xs">
                  En soumettant ce formulaire, vous confirmez que vous acceptez le stockage et le
                  traitement de vos données personnelles comme décrit dans notre avis de{' '}
                  <Link className="underline" href="/confidentialite">
                    confidentialité
                  </Link>
                  .
                </p>
              </div>
              {props.sections?.map((section) => (
                <div key={localizedString(section.heading, props.locale)} className="">
                  <h6 className="mb-4 opacity-50">
                    {localizedString(section.heading, props.locale)}
                  </h6>
                  <ul>
                    {section.sub_links?.map((sub_link) => (
                      <Link
                        key={localizedString(sub_link.link, props.locale)}
                        className="text-gray-400 hover:text-white"
                        href={localizedString(sub_link.link || '/', props.locale)}
                      >
                        <li>{localizedString(sub_link.title, props.locale)}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <hr className="container my-8 mx-auto border-gray-200 opacity-[0.1] dark:border-white" />

            <section className="mx-auto  flex flex-col justify-between px-2 py-4 text-center text-white sm:flex-row">
              <p className="ml-10 text-sm opacity-50">
                © 2022 HORUS Mobility, Inc. All rights reserved
              </p>
              <div className="flex justify-center gap-6 pt-4 sm:w-[280px] sm:flex-row">
                <a target="_blank" rel="noreferrer" href="https://www.twitter.com/horusmobility/">
                  <Icon
                    className="hover:text-yellow-400"
                    icon="mdi:twitter"
                    height={25}
                    width={25}
                  />
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=100083620861538"
                >
                  <Icon
                    className="hover:text-yellow-400"
                    icon="ri:facebook-fill"
                    height={25}
                    width={25}
                  />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/horusmobility/">
                  <Icon
                    className="hover:text-yellow-400"
                    icon="mdi:instagram"
                    height={25}
                    width={25}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/86643564/admin/"
                >
                  <Icon
                    className="hover:text-yellow-400"
                    icon="mdi:linkedin"
                    height={25}
                    width={25}
                  />
                </a>
              </div>
            </section>
          </div>
        </footer>
      </Container>
    </Wrapper>
  )
}
