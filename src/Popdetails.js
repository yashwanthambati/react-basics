import React from "react"
import data from './sfpopos-data.json'

function Popdetails(props){
    const { id } = props.match.params
    const { title, desc, hours, features, geo,images} = data[id]
    return(
        <div>
      <div>
      
      <img alt='hello' src={`${process.env.PUBLIC_URL}images/${images[0]}`} />
      </div>

      <div>
      
        <h1>{ title }</h1>
        <p>{ desc }</p>
        <p>{ hours }</p>
        <p>{ features }</p>
        <p>{ geo.lat } { geo.lon }</p>
      </div>

    </div>

    )
}

export default Popdetails

