import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import RegionFilter from './components/Regionfilter'
import Searchbar from './components/Searchbar'
import { useState } from 'react'
import CountryCard from './components/CountryCard'

function App() {
  const [countries, setCountries] = useState(null)
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
      <div className="px-24 py-12">
        {countries
          ? (
            countries.slice(0, 5).map((country, index) => (
              <CountryCard key={index} flag={country.flags.svg} countryName={country.name.official} population={country.population} region={country.region} capital={country.capital} />
            ))
          )
          : (
            <h1 className="">Loading...</h1>
          )}

      </div>

    </>
  )
}

export default App
