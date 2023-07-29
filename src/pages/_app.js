import RootLayout from '@/Layout/RootLayout'
import { store } from '@/Redux/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Provider store={store}>{<Component {...pageProps} />}</Provider>
    </RootLayout>
  )
}
