import React from 'react'

import HowDoesItWorkSanityInterface from '../../interfaces/sanity/sections/HowDoesItWork'
import { urlFor } from '../../sanity/client'
import Container from '../atoms/Container'
import { localizedString } from '../atoms/Text'
import Wrapper from '../atoms/Wrapper'

export default function HowDoesItWork(props: HowDoesItWorkSanityInterface) {
  return (
    <Wrapper className={'bg-caricature'}>
      <Container>
        {/* <Container>Component: sections/HowDoesItWork.tsx props: {JSON.stringify(props)}</Container> */}

        <div className="py-[102px]">
          <div className="">
            <div>
              <div className="gap-y-5  text-center font-semibold">
                <div className="">{localizedString(props.sub_heading, props.locale)}</div>
                <div className=" text-[31px]">{localizedString(props.heading, props.locale)}</div>
              </div>
            </div>

            <div
              style={{ paddingBottom: props.cards?.length ? (props.cards?.length - 1) * 50 : 0 }}
              className="mt-10 grid grid-flow-row gap-9 sm:grid-cols-1 lg:grid-cols-3 "
            >
              {props.cards?.map((card, i) => (
                <div
                  key={localizedString(card.heading, props.locale)}
                  className={i == 1 ? 'translate-y-[60px]' : i == 2 ? 'translate-y-[110px]' : ''}
                >
                  <h1 className="text-center text-9xl font-bold text-gray-500 hover:text-black ">
                    0{i + 1}
                  </h1>
                  <div
                    className={
                      'flex  w-full translate-y-[-35px] flex-col gap-y-5 rounded-[5px] px-5 py-[30px] shadow-xl   ' +
                      'bg-white text-black hover:bg-yellow-400 hover:text-white'
                    }
                  >
                    <div>
                      <img src={urlFor(card.photo)} />
                    </div>
                    <div>
                      <div className="text-xl font-semibold">
                        {localizedString(card.heading, props.locale)}
                      </div>
                      <div className={'mt-2 font-inter  ' + ''}>
                        {localizedString(card.body, props.locale)}
                      </div>
                    </div>
                    <div>
                      {card.button && (
                        <a href={localizedString(card.button.link, props.locale)}>
                          <button className="rounded-full border-[1px]  border-gray-400 bg-white py-2 px-4 text-black">
                            {localizedString(card.button.title, props.locale)}
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
