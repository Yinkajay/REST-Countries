import  { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import RegionFilter from '../components/Regionfilter'
import CountryCard from '../components/CountryCard'

const Home = () => {
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
            <div className="px-24 py-12 grid grid-cols-4">
                {countries
                    ? (
                        countries.slice(0, 8).map((country, index) => (
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

export default Home
