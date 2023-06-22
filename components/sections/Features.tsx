import React from 'react'

import FeaturesSanityInterface from '../../interfaces/sanity/sections/Features'
import { urlFor } from '../../sanity/client'
import Container from '../atoms/Container'
import { localizedString } from '../atoms/Text'
import Wrapper from '../atoms/Wrapper'

export default function Features(props: FeaturesSanityInterface) {
  return (
    <Wrapper className={' '}>
      <Container className={''}>
        <div className="bg-[#f5f7ff] px-6 py-8 md:py-16 md:px-12">
          <div className="justify-between text-black sm:grid-cols-1 lg:flex lg:gap-20">
            <div className="my-auto flex flex-col justify-center ">
              <span className="my-5  text-xl font-semibold capitalize text-[#FFC300]">
                {localizedString(props.heading, props.locale)}
              </span>
              <div className="sm:text-normal  my-2 max-w-[396px] font-semibold sm:text-[15px] lg:text-[25px]">
                {localizedString(props.body, props.locale)}
              </div>
            </div>
            <div className="m-auto my-5   grid  grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
              {props.cards?.map((card) => (
                <div
                  key={card.heading}
                  className="m-auto max-w-[300px] bg-white   py-5 px-5 md:min-h-[250px]"
                >
                  <img src={urlFor(card.photo)} />

                  <h3 className="mt-7 text-xl font-semibold">
                    {localizedString(card.heading, props.locale)}
                  </h3>
                  <p className="mt-2 font-inter">
                    {localizedString(card.sub_heading, props.locale)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
