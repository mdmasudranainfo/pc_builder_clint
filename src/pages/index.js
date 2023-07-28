import { Inter } from 'next/font/google'
import Bannar from '@/Components/Bannar/Bannar'
import Categories from '@/Components/Categories/Categories'
import RootLayout from '@/Layout/RootLayout'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage({ categories }) {
  return (
    <>
      <Bannar />
      <Categories categories={categories} />
    </>
  )
}

//

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

//

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/categories')
  const categories = await res.json()

  return {
    props: {
      categories,
    },
  }
}
