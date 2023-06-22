import React from 'react'

export default function Container({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`max-w-[1440px] px-5 xl:px-[120px] 2xl:mx-auto  ${className}`}>{children}</div>
  )
}
