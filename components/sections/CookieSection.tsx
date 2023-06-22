import React, { use, useEffect, useState } from 'react'

import Button from '../atoms/Button'
import Container from '../atoms/Container'
import Wrapper from '../atoms/Wrapper'

const CookieSection = () => {
  const [visible, setVisible] = useState(false)
  const [showcook, setShowCook] = useState('false')
  useEffect(() => {
    setTimeout(() => setVisible(true), 1500)
    setShowCook(localStorage.getItem('cokkie') || 'true')
  }, [])
  return showcook === 'true' ? (
    <Wrapper
      className={`${
        !visible ? ' translate-y-[110%]' : ''
      } fixed  bottom-4 left-1/2 z-50 w-full  -translate-x-1/2 rounded-lg  bg-transparent   transition-transform duration-200 ease-in`}
    >
      <Container className={'    '}>
        <div
          className={
            'flex min-h-[99px] items-center rounded-2xl bg-white px-2 py-4  shadow-xl lg:px-20'
          }
        >
          <div className="mr-3 hidden md:mr-9 md:block">
            <svg
              className={''}
              width="47"
              height="51"
              viewBox="0 0 47 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5176 8.35424C9.29052 7.2013 9.1133 3.61754 9.10791 3.02197C9.10251 3.61754 8.92529 7.2013 4.69824 8.35424C4.69824 8.35424 9.10791 8.82903 9.10791 12.6357C9.10749 8.82903 13.5176 8.35424 13.5176 8.35424Z"
                fill="#FFC612"
              />
              <path
                d="M21.2583 3.65688C18.4141 2.88119 18.295 0.469886 18.2912 0.0689697C18.2875 0.469886 18.1667 2.88119 15.3242 3.65688C15.3242 3.65688 18.2912 3.97645 18.2912 6.53758C18.2912 3.97645 21.2583 3.65688 21.2583 3.65688Z"
                fill="#FFC612"
              />
              <path
                d="M6.2416 16.817C3.39742 16.0413 3.27789 13.63 3.27457 13.2291C3.27084 13.63 3.15006 16.0413 0.307129 16.817C0.307129 16.817 3.27457 17.1362 3.27457 19.6977C3.2725 17.1362 6.2416 16.817 6.2416 16.817Z"
                fill="#FFC612"
              />
              <path
                d="M23.3473 50.3279C27.0983 51.0172 31.1029 51.1509 34.5945 49.6157C37.1926 48.4727 39.3159 46.493 41.3848 44.5499C42.9337 43.0973 44.5145 41.5986 45.4612 39.6969C46.8515 36.9046 46.6988 33.6255 46.5145 30.5116C46.3307 27.4076 46.141 24.2637 45.1765 21.3075C43.2258 15.3199 37.8961 10.628 31.7939 9.19245C30.894 8.983 30.0497 8.58244 29.3183 8.01792C28.9349 7.7172 28.5278 7.44794 28.101 7.21277C27.5198 6.86653 26.8749 6.64086 26.2046 6.54924C25.5344 6.45761 24.8525 6.5019 24.1998 6.67946C22.985 7.0783 22.0698 8.05818 21.0373 8.81187C18.7339 10.4931 15.7884 11.0717 13.4091 12.6426C9.64725 15.1257 7.86844 19.6349 6.30836 23.8616C5.38741 26.3559 4.45692 28.8959 4.30544 31.5504C4.02778 36.4199 6.49678 41.1948 10.1573 44.4162C13.8179 47.6377 18.5504 49.4484 23.3473 50.3279Z"
                fill="#E28C1A"
              />
              <path
                d="M21.5684 17.7048C21.8437 17.5292 22.0758 17.2939 22.2475 17.0162C22.4193 16.7386 22.5262 16.4258 22.5603 16.1011C22.7446 14.458 21.5277 14.2729 20.2312 14.7755C19.9353 14.8751 19.6674 15.0438 19.4497 15.2675C19.2319 15.4913 19.0706 15.7636 18.979 16.0621C18.9146 16.3823 18.9503 16.7145 19.0811 17.0137C19.212 17.313 19.4319 17.5647 19.7107 17.7346C19.995 17.8955 20.317 17.9775 20.6436 17.9723C20.9702 17.967 21.2894 17.8747 21.5684 17.7048Z"
                fill="#822D26"
              />
              <path
                d="M30.8251 16.5825C31.2005 16.7274 31.6155 16.7323 31.9942 16.5963C32.3729 16.4602 32.69 16.1924 32.8874 15.8417C33.0488 15.4811 33.0861 15.077 32.9932 14.6929C32.8699 14.1388 32.5477 13.6492 32.0876 13.3167C31.3061 12.7568 30.2615 12.7162 29.741 13.6309C29.5647 13.9605 29.4896 14.3349 29.5252 14.707C29.5477 15.1092 29.681 15.4973 29.9104 15.8283C30.1398 16.1593 30.4564 16.4204 30.8251 16.5825Z"
                fill="#822D26"
              />
              <path
                d="M37.7587 27.9351C36.8676 26.2489 34.5571 26.7448 33.6968 28.1343C33.1158 29.0723 33.1514 30.5457 34.2621 31.0943C35.8607 31.8841 38.6846 29.6874 37.7587 27.9351Z"
                fill="#822D26"
              />
              <path
                d="M25.8028 23.7189C27.846 24.1891 27.9954 21.7205 26.7209 20.7307C25.6281 19.882 24.0336 20.2049 24.1643 21.8251C24.2096 22.271 24.3912 22.692 24.6844 23.0309C24.9776 23.3697 25.3681 23.61 25.8028 23.7189Z"
                fill="#822D26"
              />
              <path
                d="M10.6891 28.3684C11.3772 28.5828 12.1089 28.616 12.8136 28.4647C13.3731 28.416 13.9018 28.1877 14.321 27.8139C14.5567 27.5281 14.7036 27.1795 14.7434 26.8112C14.7832 26.4428 14.7143 26.0709 14.5451 25.7413C13.7379 24.0335 11.9786 24.104 10.499 24.9332C10.1499 25.1077 9.85751 25.3776 9.65577 25.7117C9.45403 26.0457 9.35123 26.4302 9.35933 26.8204C9.41882 27.1751 9.57414 27.5068 9.80851 27.7797C10.0429 28.0525 10.3474 28.2561 10.6891 28.3684Z"
                fill="#822D26"
              />
              <path
                d="M23.8509 31.3441C24.0223 30.5875 23.6189 29.0565 22.6627 29.0457C21.7065 29.0349 20.7739 30.3688 20.5461 31.1549C20.4646 31.3768 20.4342 31.6143 20.4571 31.8496C20.48 32.0849 20.5557 32.312 20.6785 32.5141C20.8327 32.6958 21.0303 32.8356 21.253 32.9207C21.4756 33.0058 21.7161 33.0334 21.9522 33.0009C22.4004 32.9529 22.823 32.7682 23.1627 32.4718C23.5024 32.1754 23.7426 31.7817 23.8509 31.3441Z"
                fill="#822D26"
              />
              <path
                d="M13.6477 39.4961C13.9321 39.5844 14.2336 39.6021 14.5264 39.5478C14.8192 39.4935 15.0943 39.3688 15.3281 39.1844C15.6262 38.8872 15.8113 38.4953 15.8515 38.0763C16.0017 36.9557 15.1459 35.0229 13.7867 35.1296C13.4336 35.1611 13.0936 35.2784 12.7961 35.4713C12.4987 35.6641 12.2528 35.9267 12.0798 36.2361C11.9069 36.5456 11.8122 36.8926 11.8038 37.247C11.7955 37.6014 11.8738 37.9524 12.032 38.2697C12.2034 38.5735 12.4352 38.839 12.713 39.0499C12.9909 39.2608 13.309 39.4127 13.6477 39.4961Z"
                fill="#822D26"
              />
              <path
                d="M28.033 46.139C28.8631 45.9842 29.4171 45.1359 29.5093 44.2976C29.6159 43.3314 28.8569 41.1293 27.5466 41.4708C26.1945 41.8236 25.5997 43.9705 26.1509 45.0911C26.314 45.4419 26.5839 45.7322 26.9219 45.9204C27.26 46.1087 27.6489 46.1852 28.033 46.139Z"
                fill="#822D26"
              />
              <path
                d="M37.3767 39.4135C37.7551 39.5415 38.1618 39.5608 38.5506 39.4693C38.9394 39.3779 39.2948 39.1792 39.5764 38.896C39.7992 38.6573 39.9636 38.3703 40.0568 38.0574C40.1501 37.7445 40.1695 37.4143 40.1137 37.0927C40.0579 36.771 39.9283 36.4666 39.7352 36.2034C39.542 35.9403 39.2905 35.7254 39.0003 35.5757C37.8461 35.0304 36.4496 36.4842 36.2902 37.5637C36.2232 37.9495 36.2863 38.3466 36.4695 38.6926C36.6772 39.0326 36.9986 39.2879 37.3767 39.4135Z"
                fill="#822D26"
              />
              <path
                d="M38.9115 21.823C39.4128 20.9618 39.3991 19.4573 38.364 19.0473C37.2173 18.5908 35.5531 19.027 35.055 20.2139C34.8774 20.7096 34.896 21.2543 35.107 21.7367C35.3181 22.219 35.7056 22.6024 36.1901 22.8083C36.6879 22.982 37.2302 22.9788 37.7259 22.7993C38.2216 22.6199 38.6403 22.2751 38.9115 21.823Z"
                fill="#822D26"
              />
              <path
                d="M15.8155 23.855C16.0032 23.8185 16.1748 23.7246 16.3066 23.5862C16.4385 23.4478 16.524 23.2718 16.5514 23.0827C16.5929 22.7411 16.3439 22.1376 15.9355 22.1235C15.5271 22.1094 15.2017 22.7208 15.1316 23.0569C15.0992 23.1703 15.0953 23.2899 15.1201 23.4051C15.1449 23.5203 15.1978 23.6277 15.2739 23.7177C15.3474 23.781 15.4346 23.8263 15.5286 23.8502C15.6225 23.874 15.7208 23.8757 15.8155 23.855Z"
                fill="#CC760E"
              />
              <path
                d="M31.4636 25.5309C31.8805 25.5457 32.292 25.4324 32.6425 25.2062C32.9931 24.98 33.2659 24.6518 33.4242 24.2659C33.5724 23.8824 33.5852 23.2561 33.1885 22.9996C32.7917 22.7431 32.1144 22.9556 31.7425 23.142C31.2669 23.3832 30.8907 23.7831 30.6788 24.2725C30.6122 24.3997 30.5742 24.5398 30.5675 24.6832C30.5608 24.8266 30.5854 24.9697 30.6398 25.1025C30.7298 25.2377 30.8525 25.3478 30.9966 25.4227C31.1406 25.4976 31.3013 25.5348 31.4636 25.5309Z"
                fill="#CC760E"
              />
              <path
                d="M28.9557 27.9235C29.1529 27.9896 29.367 27.9834 29.56 27.9061C29.6385 27.8543 29.7046 27.7859 29.7536 27.7057C29.8027 27.6255 29.8335 27.5355 29.8439 27.4421C29.907 27.0752 29.7372 26.4045 29.3434 26.2497C28.83 26.0497 28.3378 26.5764 28.2298 27.0254C28.202 27.1184 28.193 27.216 28.2034 27.3125C28.2138 27.409 28.2434 27.5025 28.2904 27.5874C28.4601 27.7816 28.6987 27.9022 28.9557 27.9235Z"
                fill="#CC760E"
              />
              <path
                d="M26.6193 12.7186C26.7738 12.5696 26.878 12.376 26.9173 12.165C27.0654 11.5213 26.589 10.5576 25.7967 10.7805C25.0044 11.0033 24.9144 12.1297 25.4522 12.6335C25.6049 12.7842 25.8062 12.8755 26.0201 12.8911C26.234 12.9066 26.4464 12.8455 26.6193 12.7186Z"
                fill="#CC760E"
              />
              <path
                d="M41.2108 27.1716C41.4013 27.175 41.5877 27.1168 41.7424 27.0055C41.8974 26.9042 42.0228 26.7636 42.1058 26.598C42.1889 26.4325 42.2266 26.2479 42.2151 26.063C42.1292 25.233 41.2427 25.2433 40.7733 25.7468C40.6658 25.8598 40.5883 25.9979 40.5479 26.1485C40.5076 26.2992 40.5056 26.4576 40.5422 26.6092C40.583 26.7599 40.6689 26.8946 40.7884 26.9951C40.9079 27.0956 41.0553 27.1572 41.2108 27.1716Z"
                fill="#CC760E"
              />
              <path
                d="M27.1094 38.735C27.5934 38.9865 28.0963 39.2001 28.6134 39.3737C29.0475 39.5558 29.5255 39.6062 29.988 39.5186C30.2464 39.4433 30.4772 39.294 30.6516 39.089C30.8261 38.884 30.9366 38.6324 30.9695 38.3652C31.0658 37.4521 30.3964 37.1388 29.6913 36.8748C29.282 36.7209 28.8461 36.6504 28.4092 36.6674C27.9723 36.6844 27.5432 36.7887 27.1471 36.974C26.9323 37.0681 26.7411 37.2087 26.5873 37.3857C26.5113 37.4748 26.456 37.5797 26.4254 37.6927C26.3948 37.8057 26.3897 37.9242 26.4105 38.0394C26.4707 38.1985 26.5642 38.3428 26.6847 38.4627C26.8053 38.5827 26.9501 38.6755 27.1094 38.735Z"
                fill="#CC760E"
              />
              <path
                d="M23.9316 37.9697C25.2144 37.3571 23.3999 36.0124 22.7015 36.9159C22.5998 37.0718 22.561 37.2605 22.593 37.4439C22.6249 37.6273 22.7252 37.7918 22.8737 37.9041C23.0278 38.0091 23.2075 38.0706 23.3936 38.0822C23.5798 38.0937 23.7656 38.0548 23.9316 37.9697Z"
                fill="#CC760E"
              />
              <path
                d="M8.94712 33.0259C9.05617 32.9686 9.1495 32.8855 9.2189 32.7837C9.2883 32.682 9.33164 32.5647 9.34513 32.4423C9.38891 32.2275 9.36505 32.0045 9.27683 31.8038C9.18861 31.6031 9.04036 31.4347 8.85249 31.3218C8.62008 31.1288 8.34201 30.881 8.04112 31.0786C7.41608 31.489 7.6817 32.5772 8.22456 32.9163C8.32664 32.9927 8.44602 33.0427 8.57209 33.0618C8.69815 33.0809 8.82698 33.0686 8.94712 33.0259Z"
                fill="#CC760E"
              />
              <path
                d="M20.4893 44.1876C20.6416 44.2993 20.8221 44.3663 21.0104 44.381C21.1987 44.3956 21.3874 44.3574 21.5551 44.2706C21.6824 44.1807 21.7818 44.0569 21.842 43.9132C21.9022 43.7695 21.9207 43.6117 21.8954 43.458C21.8204 43.1769 21.6599 42.9261 21.4361 42.7402C21.2123 42.5543 20.9363 42.4426 20.6462 42.4204C20.0764 42.3432 19.8029 42.9857 19.9377 43.4829C20.0291 43.7774 20.2253 44.0282 20.4893 44.1876Z"
                fill="#CC760E"
              />
              <path
                d="M41.8962 34.0509C42.1468 33.9343 42.3651 33.7582 42.5323 33.5381C42.6994 33.3179 42.8103 33.0603 42.8553 32.7876C42.9276 32.3224 42.7761 31.3006 42.1112 31.6865C41.5895 32.0547 41.216 32.5966 41.0574 33.2151C40.9978 33.352 40.9791 33.5033 41.0037 33.6506C41.0282 33.7979 41.0949 33.9349 41.1957 34.0451C41.3016 34.1076 41.4222 34.141 41.5452 34.142C41.6681 34.143 41.7892 34.1116 41.8962 34.0509Z"
                fill="#CC760E"
              />
              <path
                d="M14.9688 20.5431C15.2384 20.4032 15.4731 20.2047 15.6557 19.9621C16.0069 19.6083 16.2579 19.1676 16.3828 18.6851C16.5264 17.8857 16.0583 17.4055 15.3573 17.8222C14.7119 18.1989 14.2343 18.8074 14.0217 19.5238C13.9632 19.6706 13.9422 19.8297 13.9606 19.9867C13.979 20.1436 14.0362 20.2935 14.1272 20.4228C14.239 20.5253 14.3792 20.5917 14.5294 20.6131C14.6796 20.6346 14.8327 20.6102 14.9688 20.5431Z"
                fill="#CC760E"
              />
              <path
                d="M23.3471 50.3279C27.0982 51.0173 31.1027 51.1509 34.5944 49.6157C37.1924 48.4727 39.3157 46.4931 41.3846 44.5499C42.9335 43.0973 44.5144 41.5986 45.461 39.697C46.0457 38.475 46.4064 37.158 46.526 35.8086L45.8897 36.6096L42.9812 40.271L39.6569 44.4557C38.7754 45.5655 37.6062 46.7948 36.2076 46.5644C35.6328 46.4698 35.0949 46.1253 34.5147 46.1764C33.8046 46.2386 33.297 46.8558 32.7666 47.3327C31.1766 48.7608 28.9068 49.1227 26.769 49.1816C20.1994 49.3355 13.7913 47.1355 8.70166 42.9786C9.15986 43.485 9.64592 43.9655 10.1576 44.4179C13.8177 47.6414 18.5503 49.4485 23.3471 50.3279Z"
                fill="#CC760E"
              />
            </svg>
          </div>

          <div className="mr-2 flex-grow font-inter text-xs md:text-base">
            <div className="block lg:hidden">
              <button
                onClick={() => {
                  setVisible(!visible)
                  localStorage.setItem('cokkie', 'false')
                }}
                className=" md:ml-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            This site uses cookies. Some of them are essential while others are used to <br /> serve
            you a customized shopping experience.&nbsp;
            <span className="underline">Learn more</span>
          </div>
          <button
            onClick={() => {
              setVisible(!visible)
            }}
            className="mr-2 rounded-full bg-[#FFC300] py-2 px-6 text-xs text-white md:mr-7  md:py-4 md:px-16 md:text-base"
          >
            Accept
          </button>
          <button
            onClick={() => {
              setVisible(!visible)
              localStorage.setItem('cokkie', 'false')
            }}
            className=" hidden md:ml-6 lg:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </Container>
    </Wrapper>
  ) : null
}

export default CookieSection