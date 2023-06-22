import React from 'react'
import Image from 'next/image'

import ClientsSanityInterface from '../../interfaces/sanity/sections/Clients'
import { decodeAssetId, urlFor } from '../../sanity/client'
import Container from '../atoms/Container'
import Wrapper from '../atoms/Wrapper'

export default function Clients(props: ClientsSanityInterface) {
  return (
    <Wrapper>
      <Container className="pb-[100px] pt-[50px] md:py-[100px] lg:py-[100px]">
        <div className="grid grid-cols-2 justify-center gap-5 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {props.clients?.map((ite, index) => {
            if (!ite?.photo) return null
            const { dimensions } = decodeAssetId(ite.photo.asset._ref)
            return (
              <div className="flex justify-center" key={index}>
                <Image
                  alt={''}
                  src={urlFor(ite.photo.asset)}
                  height={dimensions?.height || 0}
                  width={dimensions?.width || 0}
                />
              </div>
            )
          })}
        </div>
      </Container>
    </Wrapper>
  )
}
