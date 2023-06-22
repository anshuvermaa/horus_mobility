import React from 'react'
import Link from 'next/link'

import TestimonialsSanityInterface from '../../interfaces/sanity/sections/Testimonials'
import Container from '../atoms/Container'
import { localizedString } from '../atoms/Text'
import Wrapper from '../atoms/Wrapper'
import TestimonialCard from '../molecules/TestimonialCard'

export default function Testimonials(props: TestimonialsSanityInterface) {
  return (
    <Wrapper>
      <Container className={'py-28 !px-0'}>
        {/* <Container>Component: sections/Testimonials.tsx props: {JSON.stringify(props)}</Container> */}
        <Container>
          <div className="mb-[60px] text-center">
            <div className="mb-2.5 font-semibold text-[#FFC300]">
              {localizedString(props.heading, props.locale)}
            </div>
            <div className="text-[31px] font-semibold text-[#000000]">
              {localizedString(props.sub_heading, props.locale)}
            </div>
          </div>
        </Container>

        <div className="no-scrollbar grid grid-flow-col  overflow-x-auto !px-0  sm:grid-cols-1 lg:grid-rows-2">
          {props.testimonials?.map((testimonial) => (
            <a key={testimonial.link} href={testimonial.link}>
              <TestimonialCard
                locale={props.locale}
                photo={testimonial.photo}
                date={new Date(testimonial.date || '').toDateString()}
                sub_heading={testimonial.sub_heading || ''}
                name={testimonial.name || ''}
                body={testimonial.body || ''}
              />
            </a>
          ))}
        </div>
      </Container>
    </Wrapper>
  )
}
