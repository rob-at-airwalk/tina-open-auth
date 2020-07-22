import '../styles/index.css'
import { withTina } from 'tinacms'


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default withTina(MyApp)
