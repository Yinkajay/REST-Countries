import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import RegionFilter from './components/Regionfilter'
import Searchbar from './components/Searchbar'
import { useState } from 'react'

function App() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all')
      const data = await response.json()
      setCountries(data)
      console.log(data)
    }
    fetchCountries()
  }, [])

  return (
    <>
      <Navbar />
      <div className="px-24 bg-red-500">
        <Searchbar />
        <RegionFilter />
      </div>
      <h1 className="">Hello World</h1>
    </>
  )
}

export default App
