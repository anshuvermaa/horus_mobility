import React from 'react'

import LeadershipSanityInterface from '../../interfaces/sanity/sections/Leadership'
import Container from '../atoms/Container'
import { localizedString } from '../atoms/Text'
import Wrapper from '../atoms/Wrapper'
import TeamCard from '../molecules/TeamCard'

export default function Leadership(props: LeadershipSanityInterface) {
  return (
    <Wrapper>
      <Container className={'my-[100px]'}>
        <div className=" flex flex-col justify-center gap-10">
          <h2 className="text-center text-[31px] font-semibold text-black  md:mb-14">
            {localizedString(props.heading, props.locale)}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {props.members?.map((item, index) => {
              return <TeamCard locale={props.locale} member={item} key={index} />
            })}
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
