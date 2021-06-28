//@ts-check
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Home.module.css'
import Layoutuser from '../komponen/layout'
function MyApp({ Component, pageProps }) {
  return (
  <Layoutuser>
    <Component {...pageProps}/>
  </Layoutuser>
  )
}

export default MyApp
