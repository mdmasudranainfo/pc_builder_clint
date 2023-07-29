import RootLayout from '@/Layout/RootLayout'
import Image from 'next/image'
import React from 'react'

const ProductDetail = ({ product }) => {
  console.log(product)
  return (
    <div className="container mx-auto my-[50px] ">
      <div className="grid grid-cols-2 gap-8 justify-items-center">
        <div className="">
          <Image
            src={product?.Image}
            width={500}
            height={500}
            layout="responsive"
            alt=""
          />
        </div>
        <div className="">
          <h2 className="text-3xl font-bold">{product?.Product_Name}</h2>
          <div className="flex gap-5 mt-5">
            <p className="font-bold">Price: {product?.Price}</p>
            <p className="font-bold">Category: {product?.Category}</p>
            <p className="font-bold">
              Status: {product?.Status ? 'In Stock' : 'Out Of Stock'}
            </p>
            <p className="font-bold">Brand: {product?.Key_Features?.Brand}</p>
          </div>
          <div className=" mt-1">
            <p className="font-bold mt-1 text-secondary">Key Features</p>
            <p className="mt-1">
              <span className="font-bold">Mode:</span>{' '}
              {product?.Key_Features?.Model}
            </p>
            <p className="mt-1">
              <span className="font-bold">Specification</span>:{' '}
              {product?.Key_Features?.Specification}
            </p>

            <p className="mt-1">
              <span className="font-bold">Resolution</span>:{' '}
              {product?.Key_Features?.Resolution}
            </p>
            <p className="mt-1">
              <span className="font-bold">Voltage</span>:{' '}
              {product?.Key_Features?.Voltage}
            </p>
            <p className="mt-1">
              <span className="font-bold">Individual Rating</span>:{' '}
              {product?.Individual_Rating}
            </p>
            <p className="mt-1">
              <span className="font-bold">Average Rating</span>:{' '}
              {product?.Average_Rating}
            </p>
          </div>
        </div>
      </div>

      <div className=" mt-8">
        <p>
          <span className="font-bold">Description</span>: {product?.Description}
        </p>
      </div>
    </div>
  )
}

export default ProductDetail

ProductDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

//

export const getServerSideProps = async contex => {
  const { params } = contex
  const res = await fetch(`http://localhost:5000/product/${params?.productsId}`)
  const product = await res.json()
  return {
    props: {
      product,
    },
  }
}
