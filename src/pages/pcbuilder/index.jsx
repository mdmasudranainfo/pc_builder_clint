import RootLayout from '@/Layout/RootLayout'
import Image from 'next/image'
import React from 'react'

const PcBuilderPage = ({ categories }) => {
  console.log(categories)
  return (
    <div className="container mx-auto  min-h-[80vh]">
      <div className="max-w-[800px] mx-auto bg-slate-200 px-4 mt-5">
        <div className=" flex justify-between py-5">
          <h2 className="text-3xl">PC Builder </h2>
          <button className="btn btn-primary">Complite</button>
        </div>

        {/*  */}
        <div className="grid grid-cols-1 gap-5">
          {categories?.map(category => (
            <div key={category?._id}>
              <Image src={category?.image} width={50} height={50} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PcBuilderPage

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/categories')
  const categories = await res.json()

  return {
    props: {
      categories,
    },
  }
}
