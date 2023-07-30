import { Inter } from 'next/font/google'
import Bannar from '@/Components/Bannar/Bannar'
import Categories from '@/Components/Categories/Categories'
import RootLayout from '@/Layout/RootLayout'
import HomeProducts from '@/Components/HomeProducts/HomeProducts'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage({ categories, products }) {
  return (
    <>
      <Bannar />
      <Categories categories={categories} />

      <HomeProducts products={products} />
    </>
  )
}

//

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

//

export const getStaticProps = async () => {
  const res = await fetch(
    'https://pc-builder-server-zeta.vercel.app/categories'
  )
  const categories = await res.json()
  const ress = await fetch('https://pc-builder-server-zeta.vercel.app/products')
  const products = await ress.json()

  return {
    props: {
      categories,
      products,
    },
  }
}
