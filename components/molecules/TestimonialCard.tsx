import React from 'react'
import Image from 'next/image'
import ReactStars from 'react-stars'

import { urlFor } from '../../sanity/client'
import Container from '../atoms/Container'
import { localizedString } from '../atoms/Text'
import Wrapper from '../atoms/Wrapper'
const TestimonialCard = (props: {
  name: string
  date: string
  body: string
  photo: any
  sub_heading: string
  locale: string
}) => {
  return (
    <div className="my-4 mx-4 h-fit max-h-[300px] min-h-[300px] w-[330px]  rounded-lg bg-white py-3 px-5 shadow-md transition-transform duration-200 ease-in hover:scale-110">
      <div className="flex">
        <Image
          height={40}
          width={40}
          src={urlFor(props.photo)}
          className="mx-2 h-[40px] w-[40px] rounded-full"
          alt=""
        />
        <div>
          <h1 className="font-bold">{props.name}</h1>
          <h3 className="font-inter text-sm text-[#8a8a8a]">{props.date}</h3>
        </div>
      </div>
      <div>
        <ReactStars count={5} size={15} value={5} color2={'#F6C155'} edit={false} />
      </div>
      <div className="">
        <h1 className=" text-sm ">{props.sub_heading}</h1>
        <h3 className="line-clamp-9 my-1 font-inter text-sm font-semibold text-[#8a8a8a]">
          {localizedString(props.body, props.locale)}
        </h3>
      </div>
    </div>
  )
}

export default TestimonialCard
