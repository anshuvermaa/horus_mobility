import React, { useState } from 'react'
import Link from 'next/link'

import CTASanityInterface from '../../interfaces/sanity/sections/CTA'
import Container from '../atoms/Container'
import { localizedString } from '../atoms/Text'
import Wrapper from '../atoms/Wrapper'

export default function CTA(props: CTASanityInterface) {
  return (
    <Wrapper className={'z-40 mt-64 !overflow-visible md:mt-44'}>
      <Container className={' !md:px-5 relative mb-0 h-0.5 w-full !px-0'}>
        <div className=" top-[50%] -translate-y-[99.3%] sm:translate-y-1 md:-translate-y-[60%]   md:pb-0 lg:pb-0 ">
          <div className="borde m-auto flex w-full translate-y-[0%] flex-col justify-center gap-6 bg-[#FFC300] p-[5%] md:w-[80%] md:rounded-lg md:rounded-none lg:w-[80%] lg:rounded-none">
            <div className="m-auto w-[90%] text-center text-3xl font-semibold text-white sm:w-full md:w-[60%] ">
              {localizedString(props.heading, props.locale)}
            </div>
            <div>
              <a href={localizedString(props.button?.link, props.locale)}>
                <button className="m-auto flex w-[80%] justify-between rounded-full bg-[#ffffff] py-2 px-4  text-[#FFC300] md:w-[50%] lg:w-[50%]">
                  <span className="m-auto mr-auto mb-[1px] inline pl-3 text-center">
                    {localizedString(props.button?.title, props.locale)}
                  </span>
                  <span className="mt-[3%] sm:mt-[2%] md:mt-[2%] lg:mt-[2%]">
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
                        fill="#FFC300"
                      />
                    </svg>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
