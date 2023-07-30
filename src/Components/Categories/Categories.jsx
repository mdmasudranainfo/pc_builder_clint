import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Categories = ({ categories }) => {
  return (
    <div className="container mx-auto my-[100px]">
      <h1 className="text-3xl text-center font-bold">Featured Category </h1>
      <p className="text-center font-bold mt-2">
        Get Your Desired Product from Featured Category!
      </p>

      {/*  card*/}
      <div className=" grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3  grid-cols-2 gap-10 mt-8 ">
        {categories?.map(category => (
          <Link
            href={`categories/${category?.categoris}`}
            className="shadow-xl p-3"
            key={category?._id}
          >
            <div className="p-5">
              <Image
                src={category?.image}
                width={500}
                height={500}
                layout="responsive"
                alt=""
              />
            </div>
            <h1>{category?.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories
