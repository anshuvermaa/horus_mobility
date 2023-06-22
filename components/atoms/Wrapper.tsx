import React from 'react'

export default function Wrapper({
  children,
  className,
  id,
}: React.PropsWithChildren<{ className?: string; id?: string }>) {
  return (
    <section id={id} className={' ' + className}>
      {children}
    </section>
  )
}
