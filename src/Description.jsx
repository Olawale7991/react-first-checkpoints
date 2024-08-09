import React from 'react'

const Description = (props) => {
  return (
    <div>
        <div className='card'>
        <img src={props.image} alt="" style={{width: 200, height: 200}} />
        <h5>{props.title}</h5>
        <h6>Price {props.price}</h6>
        </div> 
    </div>
  )
}

export default Description