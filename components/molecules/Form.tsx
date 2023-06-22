import React, { FormEvent, useEffect } from 'react'
import { useState } from 'react'
import codes from 'country-calling-code'
import { v4 } from 'uuid'

import ProductSanityInterface from '../../interfaces/sanity/documents/Product'
const zeroedNumber = (x: number) => (x < 10 ? '0' : '') + x
const Form = ({ className, product }: { className: string; product: ProductSanityInterface }) => {
  const [startDate, setStartDate] = useState<string>()
  const [endDate, setEndDate] = useState<string>()
  const [startTime, setStartTime] = useState<string>()
  const [endTime, setEndTime] = useState<string>()
  const [days, setDays] = useState(1)
  const [loading, setLoading] = useState(false)
  const [affiliateShow, setAffiliateShow] = useState(false)
  useEffect(() => {
    if (!startTime || !startDate || !endDate || !endTime) return
    const dateStart = new Date(startDate)
    const dateEnd = new Date(endDate)
    dateStart.setHours(parseInt(startTime.split(':')[0]))
    dateStart.setMinutes(parseInt(startTime.split(':')[1]))
    dateEnd.setHours(parseInt(endTime.split(':')[0]))
    dateEnd.setMinutes(parseInt(endTime.split(':')[1]))
    setDays(Math.max(0, Math.ceil((dateEnd.getTime() - dateStart.getTime()) / (1000 * 3600 * 24))))
  }, [startDate, startTime, endTime, endDate])

  var curr = new Date()
  curr.setDate(curr.getDate())
  var date = curr.toISOString().substring(0, 10)

  var next = new Date()
  next.setDate(next.getDate() + 2)
  next.setHours(curr.getHours() + 2)
  var nextdate = next.toISOString().substring(0, 10)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.target as any)
    setLoading(true)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        alert('Formulaire envoyé avec succès!')
        setAffiliateShow(true)
      })
      .catch(() => alert('Error Submitting Form!'))
      .finally(() => setLoading(false))
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-netlify="true"
      name={'product'}
      className={` ${className} sticky top-[120px] h-fit rounded-sm border-[1px] border-[#d7d7d7] border-b-yellow-400 pt-5 shadow-lg `}
    >
      <input type="hidden" name="form-name" value="product" />

      <div className="grid grid-flow-row grid-cols-2">
        <span className="mx-3 px-2 pb-1 text-sm font-medium">First Name</span>
        <span className="mx-3 px-2 pb-1 text-sm font-medium">Last Name</span>
      </div>

      <div className="grid grid-flow-row grid-cols-2">
        <input
          type="text"
          name="productName"
          id="productName"
          value={product.name}
          className="hidden"
        />
        <input
          type="text"
          name="price"
          id="price"
          value={(product.price_per_day || 0) * days}
          className=" hidden "
        />
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="my-1  mx-3  rounded-md  border-[1px] border-gray-300 px-2 py-2"
          placeholder="First name (optional)"
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="mx-3 my-1 rounded-md border-[1px] border-gray-300 px-2 py-2 "
          placeholder="Last name (optional)"
        />
      </div>
      <div className="grid grid-flow-row grid-cols-1">
        <span className="mx-3 px-2 pt-3 pb-1 text-sm font-medium">Email</span>
      </div>
      <div className="grid grid-flow-row grid-cols-1">
        <input
          type="email"
          name="email"
          id="email"
          className="mx-3 my-1  rounded-md   border-[1px] border-gray-300 px-2 py-2"
          placeholder="Email"
        />
      </div>
      <div className="grid grid-flow-row grid-cols-1">
        <span className="mx-3 px-2 pt-3 pb-1 text-sm font-medium">Phone Number</span>
      </div>
      <div className="flex w-full justify-between">
        <select
          name="countrycode"
          className="w-[10px ]  my-1  ml-3 w-1/3 rounded-md border-[1px]  border-gray-300 bg-white px-2 py-2"
          id="code"
        >
          {codes.map((item, index) => {
            return (
              <option key={index} value={item.countryCodes[0]}>
                +{item.countryCodes[0]} ({item.country})
              </option>
            )
          })}
        </select>
        <input
          type="text"
          name="phone"
          id="phone"
          required={true}
          className="mx-3 my-1  w-4/5 rounded-md  border-[1px] border-gray-300 px-2 py-2"
          placeholder="Phone"
        />
      </div>
      <div className="grid grid-flow-row grid-cols-1">
        <span className="mx-3 px-2 pt-3 pb-1 text-sm font-medium">Start Date</span>
      </div>
      <div className="flex justify-between ">
        <input
          type="date"
          name="tripStartDate"
          id="tripStartDate"
          defaultValue={date}
          className="mx-3 my-1  w-3/5 rounded-md   border-[1px] border-gray-300 px-2 py-2"
          placeholder="Trip Start"
          min={new Date().toISOString().split('T')[0]}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="time"
          name="tripStartTime"
          id="tripStartTime"
          defaultValue={`${zeroedNumber(curr.getHours())}:${zeroedNumber(curr.getMinutes())}`}
          className="mx-3 my-1  w-2/5 rounded-md   border-[1px] border-gray-300 px-2 py-2"
          placeholder="Time"
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div className="grid grid-flow-row grid-cols-1">
        <span className="mx-3 px-2 pt-3 pb-1 text-sm font-medium">End Date</span>
      </div>
      <div className="flex justify-between ">
        <input
          type="date"
          name="tripEndDate"
          defaultValue={nextdate}
          id="tripEndDate"
          className="mx-3 my-1  w-3/5 rounded-md   border-[1px] border-gray-300 px-2 py-2"
          placeholder="Trip End"
          min={new Date().toISOString().split('T')[0]}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <input
          type="time"
          name="tripEndTime"
          id="tripEndTime"
          defaultValue={`${zeroedNumber(next.getHours())}:${zeroedNumber(next.getMinutes())}`}
          className="mx-3 my-1  w-2/5 rounded-md border-[1px] border-gray-300 px-2 py-2"
          placeholder="Time"
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>

      <div className="grid grid-flow-row grid-cols-1">
        <span className="mx-3 px-2 pt-3 pb-1 text-sm font-medium">Desired Pickup Location</span>
      </div>

      <div className="grid grid-flow-row grid-cols-1">
        <select
          id="country"
          name="country"
          className="mx-3 mt-1  block rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value={undefined}>Desired pickup location</option>
          <option>On-site</option>
          <option>Home delivery</option>
        </select>
      </div>
      <div className={'py-2'} />
      {affiliateShow && (
        <iframe
          src={`https://horus225.ositracker.com/sales/salejs/amount:${
            (product.price_per_day || 0) * days
          }/transaction:${v4()}`}
          width={0}
          height={0}
          onLoad={() => {
            setAffiliateShow(false)
            alert("Récompense envoyée à l'affilié")
          }}
        />
      )}
      <button
        type="submit"
        disabled={loading}
        className="mt-2 w-full rounded-md border-[1px]  border-[#FFC300] bg-[#FFC300] py-5 text-white"
      >
        {!loading && (
          <div className="flex justify-between px-11  font-semibold">
            <h4>Book this car</h4>
            <span className={'text-xl'}>
              FCFA {(product.price_per_day || 0) * days}
              <span className={'font-inter text-base font-normal'}> /{days > 1 && days}day</span>
            </span>
          </div>
        )}
        {loading && <div className={'text-center'}>Loading...</div>}
      </button>
    </form>
  )
}

export default Form
