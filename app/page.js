"use client"
import React from 'react'
import Header from "@/Components/Header"
import Navbar from '@/Components/Navbar'
import { BrowserRouter } from 'react-router-dom'
const page = () => {
  return (
    <>
      {/* <Header/> */}
      <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
    </>
  )
}

export default page
