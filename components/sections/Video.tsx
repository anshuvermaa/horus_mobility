import React from 'react'
import Image from 'next/image'

import VideoSanityInterface from '../../interfaces/sanity/sections/Video'
import { urlFor } from '../../sanity/client'
import Container from '../atoms/Container'
import { localizedString } from '../atoms/Text'
import Wrapper from '../atoms/Wrapper'

export default function Video(props: VideoSanityInterface) {
  return (
    <Wrapper>
      <Container className="pb-[100px] pt-[50px] ">
        <div className="">
          <div className="mb-3 font-inter text-sm text-[#8A8A8A]">
            {localizedString(props.micro_heading, props.locale)}
          </div>
          <div className="mb-8 max-w-[381px] text-[31px] font-semibold">
            {localizedString(props.heading, props.locale)}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          <div className="relative top-1/2 flex h-0 w-full -translate-y-1/2 items-center justify-center pb-[56.25%] sm:translate-x-[7%] md:translate-x-[7%] lg:translate-x-[7%]">
            <iframe
              className={'absolute top-1/2 left-0 h-full w-full -translate-y-1/2'}
              src={props.video?.video_url}
              title="Horus Mobility"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="w-full border bg-[#F5F7FF] p-[13%]  pr-[17%] sm:w-[100%] md:w-[100%] lg:w-[100%]">
            <div>
              <svg
                width="82"
                height="82"
                viewBox="0 0 82 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="41" cy="41" r="30.5" fill="#FFC300" stroke="#FFC300" />
                <path d="M37 34L47 41L37 48V34Z" fill="white" />
              </svg>
            </div>
            <div className="mb-3 text-[31px] font-semibold">
              {localizedString(props.video?.heading, props.locale)}
            </div>
            <div className="font-inter">
              {localizedString(props.video?.description, props.locale)}
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
