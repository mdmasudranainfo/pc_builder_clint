import RootLayout from '@/Layout/RootLayout'
import { addToBuilder } from '@/Redux/PcBuilder/pcBuildersSlice'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'

const ChoceProductPage = ({ products }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const addHandeler = product => {
    dispatch(addToBuilder(product))
    router.push('/pcbuilder')
  }

  if (!products.length) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        {' '}
        <h1 className="text-secondary">Have Not Product This Categories</h1>
      </div>
    )
  }
  return (
    <div className="container mx-auto min-h-[80vh]">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-8 justify-items-center my-[50px]">
        {products?.slice(0, 6).map(product => (
          <div key={product?._id} className="card glass max-w-[300px]">
            <figure>
              <Image
                src={product?.Image}
                width={300}
                height={300}
                layout="responsive"
                alt=""
              />
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
                  <button onClick={() => addHandeler(product)}>Buy</button>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChoceProductPage

ChoceProductPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getServerSideProps = async contex => {
  const { params } = contex
  const res = await fetch(
    `https://pc-builder-server-zeta.vercel.app/products/${params?.choseId}`
  )
  const products = await res.json()
  return {
    props: {
      products,
    },
  }
}
