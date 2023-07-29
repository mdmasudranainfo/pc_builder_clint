import RootLayout from '@/Layout/RootLayout'
import Link from 'next/link'
import React from 'react'

const ProductsPages = ({ products }) => {
  if (!products.length) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        {' '}
        <h1 className="text-secondary">Have Not Product This Categories</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto min-h-[80vh] ">
      <div className="grid grid-cols-4 gap-8">
        {products?.slice(0, 6).map(product => (
          <div key={product?._id} className="card glass">
            <figure>
              <img src={product?.Image} alt="car!" />
            </figure>
            <div className="card-body">
              <p>{product?.Product_Name}</p>
              <p> Rating: {product?.Average_Rating}</p>

              <div className="card-actions justify-end mt-1">
                <p className="font-bold bg-slate-300 text-center rounded-full">
                  {product?.Category}
                </p>
                <p className=" bg-slate-300 text-center rounded-full">
                  {product?.Status ? 'in Stock' : ' out of Stock'}
                </p>
              </div>

              <div className="card-actions justify-end">
                <p className="font-bold">৳{product?.Price}</p>
                <button className="btn btn-primary btn-sm">
                  <Link href={`/product/${product?._id}`}>Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPages

ProductsPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getServerSideProps = async contex => {
  const { params } = contex
  const res = await fetch(`http://localhost:5000/products/${params?.category}`)
  const products = await res.json()
  return {
    props: {
      products,
    },
  }
}
