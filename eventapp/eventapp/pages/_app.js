import { Fragment } from 'react'
import Layout from '../components/layout/layout'
import MainHeader from '../components/layout/mainHeader'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
