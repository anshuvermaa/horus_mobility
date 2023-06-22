import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { Icon } from '@iconify/react'

import NotificationSanityInterface from '../../interfaces/sanity/sections/Notification'
import Container from '../atoms/Container'
import { localizedString } from '../atoms/Text'
import Wrapper from '../atoms/Wrapper'

export default function Notification(props: NotificationSanityInterface) {
  const [hide, setHide] = useState(false)
  if (typeof window !== 'undefined' && !hide) {
    const lastVisited = window.localStorage.getItem('time')
    if (lastVisited) {
      const date = new Date(parseInt(lastVisited || '0'))

      if (new Date().getTime() - date.getTime() <= 24 * 60 * 60 * 1000) {
        return null
      }
    }
    return (
      <Wrapper className={'sticky bg-[#222222]'}>
        <Container className={' '}>
          <div className="relative">
            <Link href={localizedString(props.link, props.locale) || '/'}>
              <div className="font-semi-bold w-full px-10 py-3 text-center text-white underline">
                <h2>{localizedString(props.title, props.locale)}</h2>
              </div>
            </Link>
            <Icon
              onClick={() => {
                window.localStorage.setItem('time', new Date().getTime().toString())
                setHide(true)
              }}
              style={{ fontSize: '50px' }}
              className={'absolute right-4 top-1/2 w-5 -translate-y-1/2 cursor-pointer'}
              color={'white'}
              icon={'material-symbols:close'}
            />
          </div>
        </Container>
      </Wrapper>
    )
  }
  return null
}
