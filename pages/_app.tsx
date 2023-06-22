import React from 'react'
import type { AppProps } from 'next/app'
import { Inter, Open_Sans } from 'next/font/google'
import Script from 'next/script'

import '../styles/globals.css'
const inter = Inter({ subsets: ['latin'], variable: '--inter-font' })
const open_sans = Open_Sans({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id={'gtag'}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8FLB7ZDFLG');`,
        }}
      ></Script>
      <Script
        strategy="beforeInteractive"
        type="text/javascript"
        src="https://static.leaddyno.com/js"
      />
      <Script
        strategy="beforeInteractive"
        id={'leaddyno'}
        dangerouslySetInnerHTML={{
          __html: `LeadDyno.key = "111321c4f059c31822a1e7414ff0486760dcce8c"; LeadDyno.recordVisit(); LeadDyno.autoWatch();`,
        }}
      ></Script>
      <div className={`${open_sans.className} ${inter.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
