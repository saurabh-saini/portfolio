import React from 'react'
import Headder from './Headder'
import Footer from './Footer'
import {ToastContainer} from 'react-toastify'

const Layout = ({children}) => {
  return (
    <>
        <Headder/>
        <main style={{ minHeight: '80vh', paddingBottom: '80px' , marginTop:"10vh"}}>
          <ToastContainer/>
            {children}
        </main>
        <Footer/>
    </>
  )
}

export default Layout
