import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import errorLogout from '../assets/image/erroe.jpg'

const ErrorPage = () => {
  const route = useRouter()
  setTimeout(() => {
    route.push('/')
  }, [10000])
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="max-w-[500px]">
        <Image
          alt=""
          width={300}
          height={300}
          layout="responsive"
          src={errorLogout}
        />
      </div>
    </div>
  )
}

export default ErrorPage
