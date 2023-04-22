import "../styles/globals.css"
import Navbar from "../components/Navbar2"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
