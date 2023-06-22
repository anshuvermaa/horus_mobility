import React from 'react'
import Image from 'next/image'
import _Popup from 'reactjs-popup'

import Photo from '../../interfaces/sanity/atoms/Photo'
import TestimonialsSanityInterface from '../../interfaces/sanity/sections/Testimonials'
import { urlFor } from '../../sanity/client'
import { localizedString } from '../atoms/Text'

import 'reactjs-popup/dist/index.css'

const TeamCard = ({
  member,
  locale,
}: {
  member: {
    photo?: Photo
    heading?: string
    body?: string
    designation?: string
  }
  locale: string
}) => {
  const Popup = _Popup as any
  return (
    <Popup
      trigger={
        <div className="group m-auto h-[350px] w-[275px]  cursor-pointer rounded-[10px] border border-[#D1D1D1] py-[30px] px-10 transition-transform duration-200 ease-in hover:border-[#FFC300]">
          <div className="relative flex h-[200px] w-[200px] justify-center overflow-hidden rounded-full ring-2">
            <Image
              height={150}
              width={150}
              className="inset-0 w-full bg-contain "
              src={urlFor(member.photo?.asset)}
              alt="img"
            />
            <div className="absolute top-0 h-[200px] w-[200px] rounded-full bg-[#F6C15580] opacity-0  transition-opacity duration-200 ease-in group-hover:opacity-100 ">
              {''}
              <span className="mt-[46%] flex justify-center text-white"> Read bio </span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className=" text-xl font-semibold text-black">{member.heading}</div>
            <div className="mt-2 font-inter text-[#8a8a8a]">{member.designation}</div>
          </div>
        </div>
      }
      modal
      nested
      className={'max-width-modal'}
    >
      {(close: any) => (
        <div className="modal min-h-screen w-full rounded-md   p-7 md:min-h-0 md:p-12 lg:h-fit lg:max-w-[537px] ">
          <div className="absolute top-6 right-6 flex justify-end">
            <button className="close " onClick={close}>
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="20.3208" y1="6.83025" x2="6.83095" y2="20.3201" stroke="#222222" />
                <line x1="20.1499" y1="20.3199" x2="6.65997" y2="6.82999" stroke="#222222" />
              </svg>
            </button>
          </div>

          <div className="actions hidden lg:block">
            <div className="flex-col gap-8  sm:hidden lg:flex">
              <div className="flex  flex-row flex-wrap-reverse items-center justify-between">
                <div className="col  flex flex-col ">
                  <div className="font-inter text-base font-normal text-[#8A8A8A]">
                    {member.designation}
                  </div>
                  <div className="text-3xl font-semibold text-[#222222]">{member.heading}</div>
                </div>

                <div>
                  <Image
                    className="h-[130px] w-[130px] rounded-full bg-contain "
                    src={urlFor(member.photo?.asset)}
                    alt="img"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <div className="font-inter  text-[#8A8A8A]">
                {localizedString(member.body, locale)}
              </div>
            </div>
          </div>

          <div className="actions visible lg:hidden">
            <div className=" flex items-center justify-center text-center">
              <Image
                className="bg-m-auto b my-4 h-[200px] w-[200px] rounded-full "
                src={urlFor(member.photo?.asset)}
                alt="img"
                width={300}
                height={300}
              />
            </div>

            <div className="my-4 text-center">
              <h3 className="text-4xl font-semibold text-[#222222]">{member.heading}</h3>
              <h4 className="font-inter  text-xl font-normal text-[#8A8A8A]">
                {member.designation}
              </h4>
            </div>

            <div>
              <h5 className="font-inter text-[#8A8A8A]">{localizedString(member.body, locale)}</h5>
            </div>
          </div>
        </div>
      )}
    </Popup>
  )
}

export default TeamCard
