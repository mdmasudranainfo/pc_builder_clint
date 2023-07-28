import Footer from '@/Components/Footer/Footer'
import NavBar from '@/Components/NavBar/NavBar'
import React from 'react'

const RootLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default RootLayout
