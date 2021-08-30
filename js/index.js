 const loadCountries = () => {
     fetch('https://restcountries.eu/rest/v2/all')
     .then(res => res.json())
     .then(data => displayCountries(data))
 }
 loadCountries()
 const displayCountries = countries => {
     const allCountryDiv = document.getElementById('all-country');
     allCountryDiv.classList.add('countriesall')
     for(const country of countries){
         const newDiv = document.createElement('div') ;
        newDiv.classList.add('country')
         newDiv.innerHTML = `<h3> ${country.name} </h3>
                                     <p> ${country.capital} </p>
                                     <button onclick="displayDetail('${country.name}')">Detail</button>`
         allCountryDiv.appendChild(newDiv)
     }
 }

 const displayDetail = (name) => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
 }
const displayCountryDetails = details => {
    console.log(details);
    const detailCountry = document.getElementById('country-detail');
    detailCountry.innerHTML = `<h4> ${details.name} </h4>
    <p> population: ${details.population} </p>
    <img src="${details.flag}" width = "200px">`
}