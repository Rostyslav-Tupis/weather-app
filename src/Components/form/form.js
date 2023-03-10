import React, {useState} from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import {geoApiOption , GEO_API_URL} from '../../api/api'
import './form-styles.css'

function Form({onSearchChange}) {
  const [search , setSearch] = useState(null)
  const loadOptions = (inputValue) => {
      return (
      fetch(`${GEO_API_URL}/cities?minPopulation=50000&namePrefix=${inputValue}`,
      geoApiOption)
      
        .then(response => response.json())
        .then(response => {
          return{
            options: response.data.map((city)=>{
              return{
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              }
            })
          }
        })
      .catch(err => console.error(err))
      )
  }

  const handleOnChange = (searchData) =>{
    setSearch(searchData);
    onSearchChange(searchData)
  }

  return (
    <div className="form-container">
      <AsyncPaginate
      placeholder="Please enter a city name"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      />
    </div>
  );
}

export default Form;