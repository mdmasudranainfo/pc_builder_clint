import RootLayout from '@/Layout/RootLayout'
import { addToBuilder } from '@/Redux/PcBuilder/pcBuildersSlice'
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
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-8 my-[50px]">
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
  const res = await fetch(`http://localhost:5000/products/${params?.choseId}`)
  const products = await res.json()
  return {
    props: {
      products,
    },
  }
}
