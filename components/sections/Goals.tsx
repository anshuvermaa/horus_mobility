import React from 'react'
import Image from 'next/image'

import GoalsSanityInterface from '../../interfaces/sanity/sections/Goals'
import { urlFor } from '../../sanity/client'
import Container from '../atoms/Container'
import { localizedString } from '../atoms/Text'
import Wrapper from '../atoms/Wrapper'

export default function Goals(props: GoalsSanityInterface) {
  return (
    <Wrapper>
      <Container>
        <div className=" grid grid-cols-1 py-20 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-20">
          <div className="flex flex-col gap-4  ">
            <div className="font-inter text-sm font-normal text-[#8A8A8A]">
              {localizedString(props.micro_heading, props.locale)}
            </div>
            <div className="my-4 text-3xl font-semibold lg:w-[80%]">
              {localizedString(props.heading, props.locale)}
            </div>
          </div>
          {/* <div>
            <span className="font-inter text-gray-500"></span>
            <h1 className="my-4 max-w-[381px] text-[31px] font-semibold "></h1>
          </div> */}

          <div className="grid grid-cols-1 gap-5 text-sm sm:grid-cols-2 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
            {props.cards?.map((item, index) => {
              return (
                // <div key={index} className="max-w-[311px] ">
                //   <span className="font-inter text-sm text-gray-500">{item.micro_heading}</span>
                //   <h3 className="my-3  text-xl font-semibold">{item.heading}</h3>
                //   <h4 className="font-inter text-gray-500"> {item.sub_heading}</h4>
                // </div>

                <div key={index} className=" flex flex-col gap-4">
                  <div className="font-inter text-sm font-normal text-[#8A8A8A]">
                    {localizedString(item.micro_heading, props.locale)}
                  </div>
                  <div className={'flex items-center justify-between'}>
                    <div className="my-1 text-xl font-semibold">
                      {localizedString(item.heading, props.locale)}
                    </div>
                    <Image height={36} width={36} src={urlFor(item.photo)} alt={''} />
                  </div>
                  <div className="font-inter font-normal text-gray-500">
                    {localizedString(item.sub_heading, props.locale)}{' '}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
