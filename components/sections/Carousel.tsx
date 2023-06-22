import React from 'react'
import Image from 'next/image'
import CarouselX from 'react-grid-carousel'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import CarouselSanityInterface from '../../interfaces/sanity/sections/Carousel'
import { decodeAssetId, urlFor } from '../../sanity/client'
import Container from '../atoms/Container'
import Wrapper from '../atoms/Wrapper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Carousel(props: CarouselSanityInterface) {
  const data = [
    {
      imagedata:
        'https://assets-prd.ignimgs.com/2021/09/14/lostinrandom-blogroll-01-1631659942612.jpg',
    },
    {
      imagedata:
        'https://assets-prd.ignimgs.com/2021/09/14/lostinrandom-blogroll-01-1631659942612.jpg',
    },
    {
      imagedata:
        'https://assets-prd.ignimgs.com/2021/09/14/lostinrandom-blogroll-01-1631659942612.jpg',
    },
    {
      imagedata:
        'https://assets-prd.ignimgs.com/2021/09/14/lostinrandom-blogroll-01-1631659942612.jpg',
    },
    {
      imagedata:
        'https://assets-prd.ignimgs.com/2021/09/14/lostinrandom-blogroll-01-1631659942612.jpg',
    },
    {
      imagedata:
        'https://assets-prd.ignimgs.com/2021/09/14/lostinrandom-blogroll-01-1631659942612.jpg',
    },
    {
      imagedata:
        'https://assets-prd.ignimgs.com/2021/09/14/lostinrandom-blogroll-01-1631659942612.jpg',
    },
    {
      imagedata:
        'https://assets-prd.ignimgs.com/2021/09/14/lostinrandom-blogroll-01-1631659942612.jpg',
    },
    {
      imagedata:
        'https://assets-prd.ignimgs.com/2021/09/14/lostinrandom-blogroll-01-1631659942612.jpg',
    },
  ]
  if (props.gallery?.length === 1)
    return (
      <Wrapper>
        <Container className="scrollbar-hide flex-no-wrap scrolling-touch flex  gap-x-5 overflow-x-auto !p-0">
          {props.gallery?.map((item, index) => {
            if (!item) return null
            const { dimensions } = decodeAssetId(item.asset._ref)
            return (
              <div key={index} className="max-h-[594px] w-full self-stretch  ">
                <Image
                  width={dimensions?.width || 0}
                  height={dimensions?.height || 0}
                  className="h-full rounded-sm object-cover shadow-md hover:shadow-xl"
                  src={urlFor(item?.asset)}
                  alt=""
                />
              </div>
            )
          })}
        </Container>
      </Wrapper>
    )
  return (
    <div className="relative">
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        slideToClickedSlide={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {props.gallery?.map((item, index) => {
          if (!item) return null
          const { dimensions } = decodeAssetId(item.asset._ref)
          return (
            <SwiperSlide key={index} className="w-full">
              <Image
                width={dimensions?.width || 0}
                height={dimensions?.height || 0}
                className="h-full rounded-sm object-cover shadow-md hover:shadow-xl"
                src={urlFor(item?.asset)}
                alt=""
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="swiper-pagination !-bottom-10"></div>
    </div>
  )
}
