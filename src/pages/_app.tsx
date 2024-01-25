import '@/styles/globals.css'
import { AppProps } from 'next/app'
import Providers from '../layout/Providers'

const App = ({ Component, pageProps, ...appProps }: AppProps) => {
  return (
    <div className="App">
      <header className="App-header">
        <Providers>
          <Component {...pageProps}/>
        </Providers>
      </header>
    </div>
  )  
}

export default App;