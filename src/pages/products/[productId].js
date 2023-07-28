import RootLayout from '@/Layout/RootLayout'
import React from 'react'

const ProductsPages = () => {
  return (
    <div className="container mx-auto">
      <h1>afas</h1>
    </div>
  )
}

export default ProductsPages

ProductsPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
