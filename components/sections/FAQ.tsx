import React, { useState } from 'react'
import { motion } from 'framer-motion'

import FAQSanityInterface from '../../interfaces/sanity/sections/FAQ'
import Container from '../atoms/Container'
import { localizedString } from '../atoms/Text'
import Wrapper from '../atoms/Wrapper'

const FAQ = (props: FAQSanityInterface) => {
  let lenghtoffaq = props.faqs?.length
  lenghtoffaq = (lenghtoffaq || 0) / 2
  const [open, setOpen] = useState(-1)

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  }
  return (
    <Wrapper>
      <Container className="m-auto pt-20 sm:w-full lg:w-full">
        <h2 className="text-center font-sans text-4xl font-bold md:text-5xl">
          {localizedString(props.heading, props.locale)}
        </h2>
        <div className="mt-10 grid grid-flow-row gap-x-12 sm:grid-cols-1 lg:grid-cols-2 ">
          <div className="flex flex-col">
            {props.faqs?.map((item, index) => {
              if (index < (lenghtoffaq || 0)) {
                return (
                  <div key={index}>
                    <div>
                      <hr />
                      <div
                        onClick={() => {
                          if (open == index) {
                            setOpen(-1)
                          } else {
                            setOpen(index)
                          }
                        }}
                        className="my-4 flex cursor-pointer justify-between "
                      >
                        <h4 className={'font-semibold '}>
                          {localizedString(item.question, props.locale)}
                        </h4>
                        <button
                          className={
                            open == index
                              ? 'rotate-180 transition duration-500'
                              : 'transition duration-500'
                          }
                          onClick={() => {
                            if (open == index) {
                              setOpen(-1)
                            } else {
                              setOpen(index)
                            }
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6 font-semibold"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </button>
                      </div>
                      <div>
                        {open == index ? (
                          <motion.div
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                              open: { height: 'auto' },
                              collapsed: { height: 0 },
                            }}
                            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className={`${open == index ? ' ' : ''} my-3 transition duration-500`}
                          >
                            {localizedString(item.answer, props.locale)}
                          </motion.div>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                  </div>
                )
              }
            })}
            <hr className="hidden lg:block" />
          </div>

          <div className="">
            {props.faqs?.map((item, index) => {
              if (index >= (lenghtoffaq || 0)) {
                return (
                  <div key={index}>
                    <div key={item.question}>
                      <hr />
                      <div
                        onClick={() => {
                          if (open == index) {
                            setOpen(-1)
                          } else {
                            setOpen(index)
                          }
                        }}
                        className="my-4 flex cursor-pointer justify-between "
                      >
                        <h4 className={'font-semibold '}>
                          {localizedString(item.question, props.locale)}
                        </h4>
                        <button
                          className={
                            open == index
                              ? 'rotate-180 transition duration-500'
                              : 'transition duration-500'
                          }
                          onClick={() => {
                            if (open == index) {
                              setOpen(-1)
                            } else {
                              setOpen(index)
                            }
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6 font-semibold"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </button>
                      </div>
                      <div>
                        {open == index ? (
                          <motion.div
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                              open: { height: 'auto' },
                              collapsed: { height: 0 },
                            }}
                            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className={`${open == index ? '' : ''} my-3 transition duration-500`}
                          >
                            {localizedString(item.answer, props.locale)}
                          </motion.div>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                  </div>
                )
              }
            })}
            <hr />
          </div>

          {/* {props.faqs?.map((item, index) => {
            return (
              <div key={item.question}>
                <hr />
                <div
                  onClick={() => {
                    if (open == index) {
                      setOpen(-1)
                    } else {
                      setOpen(index)
                    }
                  }}
                  className="my-4 flex cursor-pointer justify-between "
                >
                  <h4 className={'font-semibold '}>{item.question}</h4>
                  <button
                    className={
                      open == index
                        ? 'rotate-180 transition duration-500'
                        : 'transition duration-500'
                    }
                    onClick={() => {
                      if (open == index) {
                        setOpen(-1)
                      } else {
                        setOpen(index)
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 font-semibold"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  {open == index ? (
                    <div
                      className={`${
                        open == index ? 'h-full ' : 'h-0'
                      } my-3 transition duration-500`}
                    >
                      {item.answer}
                    </div>
                  ) : (
                    ''
                  )}
                </div>
               
              </div>
            )
          })} */}
        </div>
      </Container>
    </Wrapper>
  )
}

export default FAQ
