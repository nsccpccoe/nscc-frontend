import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.min.css'
import Navbar from '../Components/Header/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
       <Navbar /> 
      <Component {...pageProps} />
    </>
  ) 
}