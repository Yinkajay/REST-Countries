import React from 'react'

const CountryCard = ({ countryName, population, region, capital }) => {
    return (
        <div>
            <img src="" alt="" />
            <h2>{countryName}</h2>

            <div className="">
                <h3>Population: {population}</h3>
                <h3>Region: {region}</h3>
                <h3>Capital: {capital}</h3>
            </div>
        </div>
    )
}

export default CountryCard
