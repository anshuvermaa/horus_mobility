import React from 'react'
import { Cookie } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import CarouselX from 'react-grid-carousel'

import HeroSanityInterface from '../../interfaces/sanity/sections/Hero'
import { decodeAssetId, urlFor } from '../../sanity/client'
import Button from '../atoms/Button'
import Container from '../atoms/Container'
import { localizedString } from '../atoms/Text'
import Wrapper from '../atoms/Wrapper'

import CookieSection from './CookieSection'

export default function Hero(props: HeroSanityInterface) {
  return (
    <Wrapper>
      <Container className={'!px-0'}>
        <div className="pb-[80px] pt-10 md:pt-[120px]">
          <div className=" justify-between text-black md:flex lg:flex xl:gap-12">
            <div className="mx-auto flex flex-col gap-x-3 px-5 sm:block md:max-w-[50%] lg:max-w-[50%]">
              <h1 className="text-[45px] font-bold leading-[110%] md:text-[61px] lg:text-[61px]">
                {localizedString(props.heading, props.locale)
                  ?.split('~')
                  .map((text, i) =>
                    i % 2 === 0 ? (
                      text
                    ) : (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-[#FFC300]/70 to-[#FFC300]/100 bg-clip-text text-transparent"
                      >
                        {text}
                      </span>
                    )
                  )}
              </h1>
              <div className="mt-4 max-w-[457px] font-inter text-xl text-[#8A8A8A]">
                {localizedString(props.sub_heading, props.locale)}
              </div>
              <div className="mt-5">
                <Link href={localizedString(props.primary?.link, props.locale) || '/'}>
                  <Button
                    variant={'yellowPill'}
                    className="flex w-full max-w-[457px] items-center justify-between !py-4 !px-7"
                  >
                    <span className="mr-auto mb-[1px] inline pl-3">
                      {localizedString(props.primary?.title, props.locale)}
                    </span>
                    <span className="flex ">
                      <svg
                        className=""
                        width="20"
                        height="13"
                        viewBox="0 0 20 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.5303 7.03033C19.8232 6.73744 19.8232 6.26256 19.5303 5.96967L14.7574 1.1967C14.4645 0.903806 13.9896 0.903806 13.6967 1.1967C13.4038 1.48959 13.4038 1.96447 13.6967 2.25736L17.9393 6.5L13.6967 10.7426C13.4038 11.0355 13.4038 11.5104 13.6967 11.8033C13.9896 12.0962 14.4645 12.0962 14.7574 11.8033L19.5303 7.03033ZM0 7.25H19V5.75H0V7.25Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </Button>
                </Link>

                <div className="mt-4 flex max-w-[457px] gap-4">
                  <Link href={localizedString(props.secondary?.link, props.locale) || '/'}>
                    <Button variant={'bluePill'} className="flex-grow  !py-4 !px-7">
                      {localizedString(props.secondary?.title, props.locale)}
                    </Button>
                  </Link>
                  <div className="ml-[2px] flex flex-col">
                    <span className="font-semibold">20+</span>
                    <span className="text-sm font-normal text-[#8A8A8A]">trusted partners</span>
                  </div>
                </div>
              </div>
            </div>

            {/* galary
             */}
            {props.gallery && (
              <div className="m-auto  flex ">
                <div className="hidden w-full flex-row justify-items-end  gap-2 px-5 lg:flex">
                  <div className="">
                    <div
                      className={
                        'my-2 overflow-hidden rounded-xl sm:h-full sm:w-full lg:h-[186px] lg:w-[212px]'
                      }
                    >
                      <img
                        className=" h-full w-full object-cover"
                        src={urlFor(props.gallery[0])}
                        alt=""
                      />
                    </div>
                    <div
                      className={
                        'my-2 overflow-hidden rounded-xl sm:h-full sm:w-full lg:h-[380px] lg:w-[212px]'
                      }
                    >
                      <img
                        className=" h-full w-full object-cover"
                        src={urlFor(props.gallery[2])}
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      className={
                        'my-2 overflow-hidden rounded-xl sm:h-full sm:w-full lg:h-[389px] lg:w-[316px]'
                      }
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={urlFor(props.gallery[1])}
                        alt=""
                      />
                    </div>
                    <div
                      className={
                        'my-2 overflow-hidden rounded-xl sm:h-full sm:w-full lg:h-[181px] lg:w-[316px]'
                      }
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={urlFor(props.gallery[3])}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className={'mt-5 md:hidden'}>
                  <CarouselX cols={3} rows={1} gap={10} showDots loop>
                    {props.gallery?.map((item, index) => {
                      if (!item) return null
                      const { dimensions } = decodeAssetId(item.asset._ref)
                      return (
                        <CarouselX.Item key={index}>
                          <Image
                            width={dimensions?.width || 0}
                            height={dimensions?.height || 0}
                            className="h-[221px] rounded-sm object-cover shadow-md hover:shadow-xl"
                            src={urlFor(item?.asset)}
                            alt=""
                          />
                        </CarouselX.Item>
                      )
                    })}
                  </CarouselX>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
