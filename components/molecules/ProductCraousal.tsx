import React from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import Carousel from 'react-grid-carousel'
import { useDraggable } from 'react-use-draggable-scroll'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import ProductSanityInterface from '../../interfaces/sanity/documents/Product'
import { decodeAssetId, urlFor } from '../../sanity/client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ProductCraousal = ({ product }: { product: ProductSanityInterface }) => {
  if (!product.gallery) return null
  return (
    <div className="carousel-wrapper mb-[50px]">
      <Swiper
        cssMode={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {product.gallery.length > 2 && (
          <SwiperSlide className={''}>
            <div className="grid grid-flow-row grid-cols-2 ">
              <div className="mr-2 ">
                <Image
                  src={urlFor(product.gallery?.at(0)?.asset)}
                  width={decodeAssetId(product.gallery?.at(0)?.asset._ref || '').dimensions?.width}
                  height={
                    decodeAssetId(product.gallery?.at(0)?.asset._ref || '').dimensions?.height
                  }
                  className="h-[408px] w-full md:h-[720px] "
                  alt=""
                />
              </div>
              <div className="">
                {product.gallery.length > 1 && (
                  <Image
                    src={urlFor(product.gallery?.at(1)?.asset)}
                    width={
                      decodeAssetId(product.gallery?.at(1)?.asset._ref || '').dimensions?.width
                    }
                    height={
                      decodeAssetId(product.gallery?.at(1)?.asset._ref || '').dimensions?.height
                    }
                    className="mb-2 h-[200px] w-full md:h-[356px] "
                    alt=""
                  />
                )}
                {product.gallery.length > 2 && (
                  <Image
                    src={urlFor(product.gallery?.at(2)?.asset)}
                    width={
                      decodeAssetId(product.gallery?.at(2)?.asset._ref || '').dimensions?.width
                    }
                    height={
                      decodeAssetId(product.gallery?.at(2)?.asset._ref || '').dimensions?.height
                    }
                    className=" h-[200px] w-full  md:h-[356px] "
                    alt=""
                  />
                )}
              </div>
            </div>
          </SwiperSlide>
        )}
        {product.gallery.map((photo) => (
          <SwiperSlide key={photo._key}>
            <div className={'relative h-[400px] md:h-[720px]'}>
              <Image
                alt={product.name || ''}
                src={urlFor(photo?.asset)}
                layout={'fill'}
                className={'!h-full !w-full object-cover '}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductCraousal
