import { BoletaProvider } from 'lib/contexts/boleta-context'
import type { AppProps } from 'next/app'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BoletaProvider>
      <Component {...pageProps} />
    </BoletaProvider>
  )
}

export default MyApp
