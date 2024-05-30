import React from 'react'

const CountryCard = ({ flag, countryName, population, region, capital }) => {
    return (
        <div className=' mb-8 rounded-md w-72 border-2 border-red-500 lg:w-80'>
            <img src={flag} alt={`${countryName}'s flag`} />
            <div className="">
                <h2 className='my-4 text-xl font-bold'>{countryName}</h2>

                <div className="">
                    <h3><b>Population:</b> {population}</h3>
                    <h3><b>Region:</b> {region}</h3>
                    <h3><b>Capital:</b> {capital}</h3>
                </div>
            </div>
        </div>
    )
}

export default CountryCard
