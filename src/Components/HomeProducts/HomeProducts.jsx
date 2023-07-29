import Link from 'next/link'
import React from 'react'

const HomeProducts = ({ products }) => {
  return (
    <div className="container mx-auto mb-[100px]">
      <h2 className="text-2xl font-bold pb-8 text-center">Top Product </h2>
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

export default HomeProducts
