import { ComicList } from './components/ComicsList'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './styles/global.css'

export function App() {
  return (
    <>
      <Header />
      <ComicList />
      <Footer />
    </>
  )
}
