import RootLayout from '@/Layout/RootLayout'
import { removeToPcBuilder } from '@/Redux/PcBuilder/pcBuildersSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const PcBuilderPage = ({ categories }) => {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.pcBuilder)

  return (
    <div className="container mx-auto  min-h-[80vh] my-[50px]">
      <div className="max-w-[800px] mx-auto bg-slate-200 px-4 mt-5">
        <div className=" flex justify-between py-5">
          <h2 className="text-3xl">PC Builder </h2>
          <button className="btn btn-primary">Complite</button>
        </div>

        {/*  */}
        <div className="grid grid-cols-1 gap-5 pb-5">
          {categories?.map(category => {
            const isExting = products.find(
              product => product?.Category === category?.categoris
            )

            return isExting ? (
              <div
                key={category?._id}
                className="bg-primary p-3 rounded flex justify-between items-center"
              >
                <div className="">
                  <Image src={category?.image} width={50} height={50} alt="" />
                  <p className="mt-1">{category?.name}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    className="rounded-full"
                    src={isExting?.Image}
                    width={50}
                    height={50}
                    alt=""
                  />
                  <p className="mt-1">{isExting?.Product_Name}</p>{' '}
                  <p className="mt-1 font-bold">Price: {isExting?.Price}</p>
                </div>

                <button
                  onClick={() => dispatch(removeToPcBuilder(isExting))}
                  className="btn btn-sm"
                >
                  X
                </button>
              </div>
            ) : (
              <div
                key={category?._id}
                className="bg-primary p-3 rounded flex justify-between items-center"
              >
                <div className="">
                  <Image src={category?.image} width={50} height={50} alt="" />
                  <p className="mt-1">{category?.name}</p>
                </div>
                <div className=""></div>
                <Link
                  href={`/chose/${category?.categoris}`}
                  className="btn btn-sm"
                >
                  Choce
                </Link>
              </div>
            )
            // return (
            //   <div
            //     key={category?._id}
            //     className="bg-primary p-3 rounded flex justify-between items-center"
            //   >
            //     <div className="">
            //       <Image src={category?.image} width={50} height={50} alt="" />
            //       <p className="mt-1">{category?.name}</p>
            //     </div>
            //     <div className=""></div>
            //     <Link
            //       href={`/chose/${category?.categoris}`}
            //       className="btn btn-secondary"
            //     >
            //       Choce
            //     </Link>
            //   </div>
            // )
          })}
        </div>
      </div>
    </div>
  )
}

export default PcBuilderPage

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:5000/categories')
  const categories = await res.json()

  return {
    props: {
      categories,
    },
  }
}
