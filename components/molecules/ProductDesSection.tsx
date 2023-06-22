import React from 'react'
import Image from 'next/image'

import { PortableText } from '@portabletext/react'

import ProductSanityInterface from '../../interfaces/sanity/documents/Product'
import { urlFor } from '../../sanity/client'
import { localizedString } from '../atoms/Text'

const ProductDesSection = ({
  product,
  locale,
}: {
  locale: string
  product: ProductSanityInterface
}) => {
  const data = {
    subheading: product.product_type,
    heading: product.name,
    Desc: product.product_description,
    fetures: product.features,
  }
  return (
    <div className=" max-w-[488px]">
      <span className="mb-2.5 font-inter text-sm capitalize text-[#8a8a8a]">
        {data.subheading?.toUpperCase()}
      </span>
      <h1 className="mb-7 text-4xl font-semibold text-black">{data.heading}</h1>
      <div className="mb-7 grid grid-cols-2 gap-5">
        {data.fetures?.map((item, index) => {
          return (
            <div
              key={localizedString(item?.text, locale)}
              className="flex items-center gap-3 rounded-full pr-4"
            >
              <Image
                width={32}
                height={32}
                className="inline-block h-8 w-8"
                src={urlFor(item?.photo?.asset)}
                alt=""
              />
              <h6 className="font-inter">{localizedString(item?.text, locale)}</h6>
            </div>
          )
        })}
      </div>

      <div className={'mt-3 mb-4 font-inter text-lg font-semibold text-black'}>DESCRIPTION</div>

      <p className="font-inter">
        {data?.Desc && data.Desc[locale] && <PortableText value={data.Desc[locale]} />}
      </p>
    </div>
  )
}

export default ProductDesSection
