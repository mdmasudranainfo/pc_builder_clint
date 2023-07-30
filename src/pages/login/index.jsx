import RootLayout from '@/Layout/RootLayout'
import React from 'react'
import githubLogo from '@/assets/image/github.png'
import GoogleeLogo from '@/assets/image/google.png'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

const LoginPage = () => {
  return (
    <div className="min-h-[80vh] container mx-auto flex items-center justify-center">
      <div className="">
        <h1
          onClick={() =>
            signIn('google', { callbackUrl: 'http://localhost:3000' })
          }
          className=" bg-primary flex items-center p-2 rounded-xl text-2xl cursor-pointer"
        >
          <Image src={GoogleeLogo} width={45} height={45} alt="" className="" />
          Login With Google
        </h1>
        <h1
          onClick={() =>
            signIn('github', { callbackUrl: 'http://localhost:3000' })
          }
          className=" bg-primary flex items-center p-2 rounded-xl text-2xl cursor-pointer mt-5"
        >
          <Image src={githubLogo} width={50} height={50} alt="" />
          Login With Github
        </h1>
      </div>
    </div>
  )
}

export default LoginPage

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
