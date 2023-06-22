import React from 'react'
import { useRouter } from 'next/router'

export default function Text({ text }: { text: string | any }) {
  const router = useRouter()
  const locale = router.locale || ''
  if (!text) return null
  return <span>{text[locale] || text.toString()}</span>
}
export function localizedString(text: string | any, locale: string): string {
  if (!text) return ''
  return text[locale] || text['en'] || text.toString()
}
