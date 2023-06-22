import React, { PropsWithChildren } from 'react'

const VARIANT_CLASSNAME = {
  primary: 'bg-accent1 text-black',
  secondary: 'border-[1px] border-white',
  yellow: 'rounded-2xl bg-[#FFC300]  py-2 px-8 text-white',
  yellowPill: '!rounded-full bg-[#FFC300]  py-2 px-8 text-white',
  bluePill: '!rounded-full bg-[#2C68F6]  py-2 px-8 text-white',
  yellowborder: 'rounded-2xl bg-white border-[1px] border-yellow-600  py-2 px-8 text-black',
  blackborder: 'rounded-2xl bg-white border-[1px] border-black  py-2 px-8 text-black',
}

type PROPS_TYPE = {
  variant: keyof typeof VARIANT_CLASSNAME
  className?: string
  onClick?: () => void
}

const BASE_CLASS = 'px-10 py-[18px] rounded-md border-white'

export default function Button({
  variant,
  children,
  className,
  onClick,
  ...props
}: PropsWithChildren<PROPS_TYPE>) {
  return (
    <button
      onClick={onClick}
      className={`${BASE_CLASS} ${VARIANT_CLASSNAME[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
