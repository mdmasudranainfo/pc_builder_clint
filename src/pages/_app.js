import RootLayout from '@/Layout/RootLayout'
import { store } from '@/Redux/store'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </SessionProvider>
  )
}
